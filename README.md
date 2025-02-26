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

## Design

This page is following this color pallete [color pallete](https://huemint.com/website-3/#palette=fffdf8-fbd0ae-11006d-bfa1a3-549796-efd417)

These are the sketches for the project. They are just ideas to guide the development.

- Desktop: https://wireframe.cc/UvymaX
- Mobile: https://wireframe.cc/u0Gt6x

## Url

This is the URL of the deployed project in order to test it in a real environment:

- https://marskubex.github.io/recipe-finder/#/

## Tools and libraries used

I have used a few libraries, but I didn't want to use any components library so I think it will better reflect my coding skills.

- Typescript: I used typescript to add a static type checking, which helps to catch errors, reduce bugs and make the code more robust.

- Pinia: in order to maintain and manage the state in the browser I decide to apply a reactive state management with Pinia.

- Vue-router: as I decide to have a separate views for the recipe search and the favorites recipes I decide to use vue-router in order to handle routing.

- Eslint and prettier: in order to lint, format the code and prevent bugs and wrong practices.

- gh-pages: to deploy the project in github.

- vitest: for unit testing.

- vite: as a build tool.

## Accesibility

- This project has been checked with the WCAG guides to assure accesibility.

## Future work and nice to have.

These are some ideas and developments that I considered but didn't developed because of time.

- Have better error controlling.

- Have every component unit tested.

- Add Husky for linting and formatting in precommit and deploying post-push.

- Add more details to design, like animations and transitions.

- Work a bit more in the accesibility.

- i18n: For multiple languages.
