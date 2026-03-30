# Wireframe DS --> Carbon DS Conversion

This tool allows users to create quick POC's / test ideas without massive bills or worrying about effort based pricing tools.
The goal is to show how a wireframe version of the IBM Carbon Design System can be used to convert design to code while mainting the Design System.

## Context:
In an era where AI-driven tools like Figma Make and MCP connectors democratize the ability to generate code from design, the technical barrier to building products has never been lower. However, moving a product from a raw concept to a production-ready reality still requires the coordinated effort of a "village"—spanning product management, design, and engineering.

## Problem:
Currently, product vision often gets lost in translation. While AI can "build" anything, it cannot inherently understand "why" something is being built. Product managers (PMs) and other stakeholders, frequently struggle to communicate their specific intent to designers and engineers without high-fidelity mocks, leading to:
- Misalignment: Engineers build what they see, not what the PM/Stakeholder intended.
- Inefficiency: Teams spend excessive "token budget" / "premium llm requests" and time iterating on AI outputs that don't solve the core user problem.
- Siloed Thinking: Designers and engineers are often brought in after the initial vision is set, rather than being part of a unified creative circle from the start.

![tokenComparison](https://github.com/user-attachments/assets/c9c68022-a617-4cd2-aca9-f6a3d461239f)


## Why does it matter?

- Design System Tax: Using a robust design system like IBM's Carbon increases your token usage by ~4x compared to a low-fi wireframe. This is because the AI is reading every single "hidden" layer and variant property inside that component.

- Efficiency vs. Context: While the Low Fidelity (563 tokens) is the cheapest, the resulting code will be generic. The Original Carbon (2.2k tokens) is more expensive, but it gives the AI enough context to use the correct library imports and theme variables, which is good enough to answer the question "What are you (user) trying to achieve with the poc?"

- Expenditure: While AI democratizes the ability to build products, high-level execution still requires a massive cross-functional effort; by allowing product managers / any other stakeholder to articulate their vision through simple, high-fidelity prototypes, this tool bridges the gap between intent and engineering, bringing the entire team into a unified creative circle while keeping AI tool costs, less.

## Examples

### Wireframe Input
Here is an example of what a designed wireframe looks like within the tool:

<img width="1512" height="827" alt="wireframeVersion" src="https://github.com/user-attachments/assets/09d462f3-c555-4536-bfee-dc498672ef8e" />

### Generated Code Output
And this is the resulting React application produced from the wireframe:

<img width="1512" height="827" alt="codeVersion" src="https://github.com/user-attachments/assets/aec695c9-101b-4fa7-8f13-7760c0fe8a3c" />

## Features
- **Canvas Editor**: Interactive drawing, dragging, resizing, and layered element management.
- **SVG Component Library**: Drop-in support for recognizable UI components.
- **Instant Code Generation**: Full file-structure generation (e.g., `index.css`, `App.jsx`, `components/`) ready to run.
- **Dark Mode Support**: Built-in viewing options for standard and dark modes.

## Local Development
To run this project locally;

```bash

#1 Open the `index.html` file in your browser and add your OpenAI API Key.

#2 Once you create your wireframe and write additional information in "notes", hit "Generate", wait for a while and then "Download the code"

# 3. Unzip file, Open it in your IDE, and Install all required dependencies
npm install

# 4. Build the production assets
npm run build

# 5. Start the local development server
npm run dev

#6  Navigate to `http://localhost:5173` or `http://localhost:5174` in your browser.
```

