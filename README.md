# recipe-finder

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Node version

- v20.13.1

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Deploy in gh-pages

```sh
npm run build
npm run deploy
```

📌 Design

This project follows the color palette defined here: Color Palette.

Below are the wireframes used as design guidelines:

Desktop: Wireframe

Mobile: Wireframe

🌍 Live Demo

You can test the deployed project in a real environment at the following URL:

🔗 Live Demo

🛠 Tools & Libraries Used

I intentionally avoided component libraries to better showcase my coding skills. The technologies and tools used are:

TypeScript: Adds static type checking, helping catch errors early, reducing bugs, and making the code more robust.

Pinia: Applied for state management, ensuring a reactive and centralized state in the browser.

Vue Router: Used to handle navigation between separate views for recipe search and favorite recipes.

ESLint & Prettier: Enforced consistent code style, prevented errors, and improved maintainability.

GitHub Pages (gh-pages): Used for project deployment.

Vitest: Implemented unit testing.

Vite: Chosen as the build tool for faster development and optimized production builds.

♿ Accessibility

This project follows WCAG guidelines to ensure accessibility compliance. The complete accessibility report is available in the project’s docs folder.

🚀 Future Improvements & Nice-to-Have Features

Due to time constraints, some features were considered but not implemented. These include:

Better error handling throughout the application.

Complete unit testing for all components.

Husky integration to enforce linting and formatting on pre-commits and automate deployments post-push.

Enhanced UI/UX by adding animations and smooth transitions.

Improved accessibility refinements beyond WCAG compliance.

Optimized CSS structure to reduce duplicate code and improve maintainability.

i18n support for multi-language functionality.

This README provides an overview of the project, its design choices, and potential future enhancements. 🚀

## Design

This project follows the color palette defined here: [color pallete](https://huemint.com/website-3/#palette=fffdf8-fbd0ae-11006d-bfa1a3-549796-efd417)

Below are the wireframes used as design guidelines:

- [Desktop](https://wireframe.cc/UvymaX)
- [Mobile](https://wireframe.cc/u0Gt6x)

## Live demo

You can test the deployed project in a real environment at the following URL:

- [Live demo](https://marskubex.github.io/recipe-finder/#/)

## Tools and libraries used

I intentionally avoided component libraries to better showcase my coding skills. The technologies and tools used are:

- TypeScript: Adds static type checking, helping catch errors early, reducing bugs, and making the code more robust.

- Pinia: Applied for state management, ensuring a reactive and centralized state in the browser.

- Vue Router: Used to handle navigation between separate views for recipe search and favorite recipes.

- ESLint & Prettier: Enforced consistent code style, prevented errors, and improved maintainability.

- GitHub Pages (gh-pages): Used for project deployment.

- Vitest: Implemented unit testing.

- Vite: Chosen as the build tool for faster development and optimized production builds.

## Accesibility

- This project follows WCAG guidelines to ensure accessibility compliance. The complete accessibility report is available in the project’s docs folder.

## Future work and nice to have.

Due to time constraints, some features were considered but not implemented. These include:

- Better error handling throughout the application.

- Complete unit testing for all components.

- Husky integration to enforce linting and formatting on pre-commits and automate deployments post-push.

- Enhanced UI/UX by adding animations and smooth transitions.

- Improved accessibility refinements beyond WCAG compliance.

- Optimized CSS structure to reduce duplicate code and improve maintainability.

- i18n support for multi-language functionality.
