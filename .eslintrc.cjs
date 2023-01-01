module.exports = {
  root: true,
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "import"],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    "react/jsx-uses-react": 2,
    semi: "error",
  },
};
