import eslintReact from "@eslint-react/eslint-plugin";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  {
    files: ["**/*.{ts,tsx}"],
    ...eslintReact.configs["recommended-typescript"],
    settings: {
      "react-x": {
        version: "19.0.0",
        importSource: "react",
      },
    },
  },
];
