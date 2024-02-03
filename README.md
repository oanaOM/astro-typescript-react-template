# Astro + TypeScript + React = <3

This is a quick start-up template configured with the following libraries.

- [Astro + TypeScript](https://docs.astro.build/en/guides/typescript/)
- [Tailwind](https://tailwindcss.com/docs/guides/astro) - CSS library
- [Flowbite](https://tailwindcss.com/docs/guides/astro) - Tailwind component library
- [Vitest](https://vitest.dev/) - for unit testing
- [Cypress](https://docs.cypress.io/guides/tooling/typescript-support) - for integration tests
- [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro) - for component testing
- GitHub actions for e2e tests, unit tests and build

# Development

To start the project, you will need to run in the root folder of the app the below command to install the dependencies:

```bash
pnpm install
```

and run this command to start the application in development mode:

```bash
pnpm run dev
```

Now open your favourite browser, navigate to `localhost:4321` and the you should see the home page.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                                      |
| :------------------------- | :---------------------------------------------------------- |
| `pnpm install`             | Installs dependencies                                       |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`                 |
| `pnpm run build`           | Build your production site to `./dist/`                     |
| `pnpm run preview`         | Preview your build locally, before deploying                |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check`            |
| `pnpm run astro -- --help` | Get help using the Astro CLI                                |
| `pnpm run test`            | Run unit tests                                              |
| `pnpm run test:e2e`        | Run cypress integration tests                               |
| `pnpm run prettier`        | Run prettier with default astro recommended prettier set up |
| `pnpm run lint:eslint`     | Run lint                                                    |

Feel free to use any package manager you feel more confident with.

---

Made with 💚 for the sake of speed 🚀
