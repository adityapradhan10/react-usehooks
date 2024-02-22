## ReactUseHooks
This Monorepo includes the following packages & apps:

### Apps and Packages

- `apps/web`: A web client built with [Next.js](https://nextjs.org/).
- `react-usehooks`: A `react-usehooks` package
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo


### Contribute

#### How to Add a New Hook?
To add a new hook, follow these steps:
1. Navigate to the root directory.
2. Run the following command: cd packages/react-useHooks && npm run generate:hook. This command will create a new folder inside the package's src directory with your specified hook name.


#### Where to add documentation for a newly created hook?
To document a newly created hook, proceed as follows:
1. Create a new folder with the name of the hook inside `apps/web/src/docs`.
2. Within the created folder, add the following files:
    - [hook].demo.tsx
    - [hook].mdx