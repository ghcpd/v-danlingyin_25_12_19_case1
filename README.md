# Fund Dashboard (React + TypeScript + Tailwind)

Minimal fund dashboard demo built with Vite, React, TypeScript and Tailwind CSS.

Requirements:
- Node >= 16
- pnpm

Run locally:

1. Install dependencies

   pnpm install

2. Start dev server

   pnpm dev

Build:

   pnpm build
   pnpm preview

Project structure:
- src/
  - components/ (Header, FundCard, FilterBar, EmptyState)
  - pages/ (Dashboard)
  - data/ (mock data)
  - types.ts

Notes:
- Filter funds by risk (All / Low / Medium / High)
- Sort by NAV or Daily Change (descending)
- Tailwind utilities used for layout and styling
