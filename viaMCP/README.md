# viaMCP: Figma to Carbon React Converter

This folder contains the `carbon_mapper.js` utility, designed to streamline the transition from Figma designs to production-ready IBM Carbon React code.

## Goal
The mapper translates Figma node metadata into high-fidelity prompts for LLMs (like Claude, Copilot, or Codex), ensuring the output follows strict Carbon Design System patterns and component structures.

## How to use (with Antigravity / Gemini)

1. **Provide a Figma Link**: Paste your Figma frame link in the chat.
2. **Fetch Design Context**: I will use the `figma-dev-mode-mcp-server` to fetch the design context of that node.
3. **Generate High-Fidelity Prompt**: I will pipe the metadata through `carbon_mapper.js` to generate a master prompt.
4. **Result**: The generated prompt will be ready for you to paste into another AI tool to get the React code.

## Script Details (`carbon_mapper.js`)

- **Billing Estimation**: Calculates the estimated GPT-4o cost for the conversion ($2.50/1M input tokens).
- **Component Mapping**: Automatically maps Figma layer names to Carbon React components.
- **Layout Intelligence**: Detects padding (32px default for frames), gaps, and resizing behaviors (Hug/Fill).
- **Multi-file Structure**: Enforces a component-based structure with separate CSS files.

## Component Support
Initially supports:
- `Button`
- `DataTable`
- `Accordion`
- `Tabs`
- `Search`
- `Breadcrumb`
- (And all other Carbon components via name matching)
