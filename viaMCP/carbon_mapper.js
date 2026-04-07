const fs = require('fs');

/**
 * IBM Carbon Design System Mapper
 * 
 * This script translates Figma design context into a production-ready 
 * React + IBM Carbon prompt for high-fidelity code generation.
 */

const CONFIG = {
  pricing: {
    input: 0.0000025,  // $2.50 per 1M tokens
    output: 0.00001,   // $10.00 per 1M tokens
  },
  mapping: {
    'Button': 'Button',
    'Accordion': 'Accordion',
    'Breadcrumb': 'Breadcrumb',
    'Checkbox': 'Checkbox',
    'DataTable': 'DataTable',
    'Dropdown': 'Dropdown',
    'Modal': 'Modal',
    'Pagination': 'Pagination',
    'Search': 'Search',
    'Tabs': 'Tabs',
    'Tag': 'Tag',
    'TextArea': 'TextArea',
    'TextInput': 'TextInput',
    'Toggle': 'Toggle'
  }
};

function parseFigmaUrl(url) {
  try {
    const fileKey = url.split('/design/')[1].split('/')[0];
    const nodeId = new URL(url).searchParams.get('node-id')?.replace('-', ':');
    return { fileKey, nodeId };
  } catch (e) {
    return null;
  }
}

function calculateCost(inputTokens, outputTokens = 2000) {
  const inCost = inputTokens * CONFIG.pricing.input;
  const outCost = outputTokens * CONFIG.pricing.output;
  return {
    total: inCost + outCost,
    input: inCost,
    output: outCost
  };
}

function generatePrompt(metadata, url = '') {
  const parsed = url ? parseFigmaUrl(url) : { nodeId: 'unknown', fileKey: 'unknown' };
  
  // Estimate tokens (roughly 4 chars per token)
  const inputTokens = Math.ceil(JSON.stringify(metadata).length / 4);
  const cost = calculateCost(inputTokens);

  let prompt = `================================================
DESIGN SOURCE OF TRUTH (viaMCP)
================================================
Figma Node: ${parsed.nodeId} (${url || 'N/A'})
Estimated Execution Cost (GPT-4o): ~$${cost.total.toFixed(4)}
------------------------------------------------

CONTEXT:
Implement the following Figma design using the IBM Carbon Design System (React). 
The output MUST be component-based with separate CSS files.

FILE STRUCTURE REQUIREMENTS:
1. src/index.jsx (App entry)
2. src/index.css (Global Carbon imports)
3. src/App.jsx (Main container)
4. src/components/[ComponentName].jsx (Self-contained component)
5. src/components/[ComponentName].css (Component-specific scoped styles)

LAYOUT RULES:
- Outermost frame must fit the viewport (100vw, 100vh).
- Use Flexbox for layout (display: flex).
- Nested frames MUST have a default padding of 32px all around.
- Map Figma "Hug" resizing to natural component width.
- Map Figma "Fill" resizing to flex: 1 or width: 100%.

COMPONENT MAPPING:
${Object.entries(CONFIG.mapping).map(([f, c]) => `- Figma "${f}" → <${c} />`).join('\n')}

DESIGN METADATA (NODE JSON):
${JSON.stringify(metadata, null, 2)}

================================================
INSTRUCTIONS:
1. Review the metadata for exact padding, gaps, and sizes.
2. Generate all required files starting with src/index.css.
3. Ensure 100% syntactical validity.
4. DO NOT truncate code.
================================================
`;
  return { prompt, cost };
}

// CLI / Module Export
if (require.main === module) {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: node carbon_mapper.js <figma_url>");
    process.exit(1);
  }
  
  console.log(`Processing Figma URL: ${url}`);
  console.log("Waiting for design context via MCP...");
  
  // In a real scenario, this would be piped from 'get_design_context'
  // For demonstration, we'll output a placeholder for the user to pipe.
}

module.exports = { generatePrompt, calculateCost };
