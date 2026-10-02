# figma-make-app

Next.js (App Router) + React 19 + Tailwind CSS v4.

## Structure
- `src/app/layout.tsx` - Root layout; imports `src/index.css`, sets metadata
- `src/app/page.tsx` - Client page that renders `src/App.tsx`
- `src/App.tsx` - Main application component (UI work starts here)
- `src/index.css` - Global CSS; Tailwind v4 via `@import 'tailwindcss';`
- `next.config.ts`, `postcss.config.mjs`, `tsconfig.json` - Config (`@` alias -> `src`)

## Commands
- `pnpm dev` / `pnpm build` / `pnpm start`
