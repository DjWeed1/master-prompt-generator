# Master Prompt Generator

A React + TypeScript + Vite web app for creating and working with reusable AI prompts.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

The project is configured for static hosting and uses a relative Vite base path, which keeps built assets portable across static hosting paths.

## Deployment

The repository contains a `gh-pages` deployment script. CI now validates the production build on pushes to `main` and pull requests before deployment work is considered ready.

## Change Log

### 2026-09-28 03:xx Europe/Vienna (CEST) — CI / Portfolio / Maintenance
- Replaced the generic template README with project-specific documentation.
- Added automated `npm ci`, lint and production-build validation for pull requests and `main` pushes.
- Documented the static-hosting configuration and deployment workflow.

> Time is recorded in Europe/Vienna; the repository change was made during this work session.
