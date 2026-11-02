# Travelluxe

Travelluxe is a responsive luggage storefront landing page built with React, TypeScript, Vite, and Tailwind CSS. It features a travel-themed hero, product collection, brand story, and responsive navigation.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

Install the project dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal when the server is ready.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |

## Project structure

```text
public/
  images/        Static image assets
src/
  components/    Page sections and shared UI
  hooks/         React hooks
  utils/         Shared utilities
  App.tsx        Page composition
  index.css      Global styles and Tailwind CSS
  main.tsx       Application entry point
index.html       Vite HTML entry point
vite.config.ts   Vite, React, Tailwind CSS, and single-file build configuration
```

## Technology

- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4
- `vite-plugin-singlefile` for single-file production output