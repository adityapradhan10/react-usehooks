import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React hook to the library
  plop.setGenerator("react-hook", {
    description: "Adds a new react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the hook(camelCase)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "templates/hook.hbs",
      },
      {
        type: "append",
        path: "src/index.ts",
        pattern: /export .*/g,
        template: 'export * from "./{{camelCase name}}/{{camelCase name}}"',
      },
    ],
  });
}
