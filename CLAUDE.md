# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YuqueSync Web is a marketing/landing page website for the YuqueSync tool - a desktop synchronization utility for Yuque (语雀) documents. This is a Next.js 16 static site with React 19, not the actual sync tool itself.

## Development Commands

```bash
bun dev          # Start development server
bun run build    # Production build
bun run lint     # Run ESLint
bun start        # Start production server
```

Note: The project uses Bun as the package manager (bun.lock present).

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: shadcn/ui components (new-york style) with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode, build errors ignored in config)

### Directory Structure
- `app/` - Next.js App Router pages (layout.tsx, page.tsx, globals.css)
- `components/` - React components
  - `ui/` - shadcn/ui base components
  - Page sections: header.tsx, hero.tsx, features.tsx, getting-started.tsx, configurations.tsx, footer.tsx
- `lib/utils.ts` - Utility functions (cn() for className merging)
- `hooks/` - Custom React hooks (use-mobile.ts, use-toast.ts)

### Styling Conventions
- Dark mode is hardcoded (`<body className="dark">`)
- CSS variables defined in `app/globals.css` for light/dark themes
- Custom utility classes: `.glow-effect`, `.gradient-mesh`, `.card-glow`, `.float-animation`
- Path alias: `@/*` maps to project root

### Adding UI Components
Use shadcn/ui CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```
Components are configured via `components.json` with RSC support enabled.
