# learn-firebase-with-vite

> Example combining Firebase SDK (mainly Firestore DB), Preact, Typescript, Tailwind created with Vite.

## BEFORE GETTING STARTED

Create an `.env` file starting from the `.env.example` template and add your `appID` value from the Firebase Dashboard.

## What's being used:

- [Vite](https://vitejs.dev/) - project scaffolding & development setup
- [Preact](https://preactjs.com/) - React-like library closer to the Web Standards
- [Typescript](https://www.typescriptlang.org/) - static type checking for Javascript
- [TailwindCSS](https://tailwindcss.com/) - CSS framework base on atomic class utilities

## Getting started

- create a project in Firebase dashboard
- add a new Firestore database with a collection named `messages`
- Clone the repo
- `cd`'s into into and install dependencies with

```bash
$ npm ci
```

- copy the content of `.env.example` in a new `.env` file
- replace the placeholder values with the `appId` and `projectID` from your Firebase project settings
- (instantly) start the dev server

```bash
$ npm run dev
```

## Deploy with GH Actions & Pages
This repo contains a `./github/workflows/build.yml` file which is configured to build the application with Github Actions and deploy on Github Pages.

In order for the build to work you will also have to add 2 new Secrets in Github repository settings: `VITE_APPID` and `VITE_PROJECTID` with the same values you previously used for the `.env` file.
## License

Released with [MIT license](LICENSE).
