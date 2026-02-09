# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

- **Posts CRUD with Supabase**: Full Create, Read, Update, and Delete operations for posts using Supabase as the backend database.

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase URL and API key

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Latest Updates

- **Posts CRUD Implementation**: Added complete CRUD functionality for posts with Supabase integration. This includes:
  - Creating new posts
  - Reading/displaying posts
  - Updating existing posts
  - Deleting posts

## Tech Stack

- React
- Vite
- Supabase (Backend/Database)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
