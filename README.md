# Astro+Flowbite Boilerplate

This boilerplate includes the following technologies:

- Astro: [astro.build](https://astro.build/)
- Flowbite: [flowbite.com](http://flowbite.com/)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com/)

### 🚀 Quick start

1. Clone this repository or download the ZIP file
2. Make sure that you have **Node.js** and NPM, PNPM or Yarn installed. We recommend Yarn.
3. Install the project dependencies from the `package.json` file:

```sh
yarn
```

1. Launch the Astro local development server on `localhost:2121` by running the following command:

```sh
yarn run dev
```

You can also build the project and get the distribution files inside the `dist/` folder by running:

```sh
yarn run build
```

Then, you can preview the generated build with a local web server:

```sh
yarn run preview
```

For deployment see [docs.astro.build/en/guides/deploy](https://docs.astro.build/en/guides/deploy)

Website is configured for static deployment, but you can flip it to **Server-Side rendering** by simply
uncommenting `output: "server"` in the `./astro.config.mjs`.

---

### Project Structure

After cloning this repository, you'll find the following (simplified) structure:

```sh
🛬
├── 💧 data
│   └── **/*.json                        # Satic data sources for REST etc.
│
└── src
    │
    ├── 🌠 assets
    │   └── **/*.{svg,…}                 # Transformable assets
    │
    ├── 🧱 components
    │   └── **/*.astro                   # Simple, atomic UI elements
    │
    ├── 🗺️ layouts
    │   └── **/*.astro                   # View layouts
    │
    ├── 📚 lib
    │   └── **/*.ts                      # Utilities (Databases, APIs…)
    │
    ├── 🧱 modules
    │   └── **/*.astro                   # Complex views made of elements
    │
    ├── 📑 pages
    │   ├── **/*.astro                   # File-based client routes
    │   │
    │   └── 🌐 api
    │        └── [...entities].ts        # Catch-all endpoint for CRUD ops.
    │
    ├── 🚀 services
    │   └── *.ts                         # Server-side CRUD operations
    │
    └── 📐 types
        └── *.ts                         # Data entities typings

```

### 🛠 Tools

Efforts have been put on fast **onboarding** and **developer experience**.

This project comes with extensive support for TypeScript, Astro, Tailwind, and VS Code.  
It is configured with sensible defaults and a bit of opinions.

- **TypeScript**: _strictest_ Astro's settings. Full-stack, type-safe code base
- **ESLint**: featuring `astro-eslint-parser` + `eslint-plugin-astro`
- **Prettier**: featuring `prettier-plugin-astro` (bundled with `astro`)
- **Editorconfig**: conforming with prettier
- **VS Code**: extensions recommendations, tooling settings
- **Tailwind**: Astro integration (using Vite and PostCSS)
- **Flowbite**: dependencies (core, typography), settings
- **GitHub**: a [pre-configured workflow](.github/workflows) for deployment (using PNPM cache)
- **Sandboxes**: project is tested against and fully compatible with web containers

Feel free to hack those settings to cater for your own needs.

### Useful Flowbite Links

- 📚 [Flowbite Library](https://flowbite.com/) - Open-source components built with Tailwind CSS
- 🎨 [Flowbite Figma](https://flowbite.com/figma/) - Design system built for Figma
- 🧱 [Flowbite Blocks](https://flowbite.com/blocks/) - Building sections for website and applications
- 💎 [Flowbite Pro](https://flowbite.com/pro/) - A larger collection of the open-source version of the latter three
