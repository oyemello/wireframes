# Wireframe to React Code Generator

This project is an interactive, web-based wireframing tool that allows users to design layouts and automatically generate production-ready React applications using the IBM Carbon Design System.

## Overview

The application provides a feature-rich canvas where developers and designers can:
- Drag and drop basic shapes (rectangles, circles) and specific components from an SVG library.
- Build multi-layered layouts with standard UI patterns like Data Tables, Tabs, Search Bars, and Buttons.
- Automatically translate the visual wireframe into syntactically valid, modular React code.

The generated code strictly adheres to Carbon Design System guidelines, ensuring elements are properly laid out, spaced, and themed for production use.

## Examples

### Wireframe Input
Here is an example of what a designed wireframe looks like within the tool:

![Wireframe Version](samples/wireframeVersion.png)

### Generated Code Output
And this is the resulting React application produced from the wireframe:

![Code Version](samples/codeVersion.png)

## Features
- **Canvas Editor**: Interactive drawing, dragging, resizing, and layered element management.
- **SVG Component Library**: Drop-in support for recognizable UI components.
- **Instant Code Generation**: Full file-structure generation (e.g., `index.css`, `App.jsx`, `components/`) ready to run.
- **Dark Mode Support**: Built-in viewing options for standard and dark modes.

## Local Development
To run this project locally, you can serve the `index.html` file using your favorite lightweight server.

```bash
# Example using Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.
