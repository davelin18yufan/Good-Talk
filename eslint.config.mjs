import { FlatCompat } from "@eslint/eslintrc"
import tailwind from "eslint-plugin-tailwindcss"

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const config = [
  ...tailwind.configs["flat/recommended"],
  ...compat.config({
    extends: [
      "next",
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:@next/next/recommended",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      // "tailwindcss/no-custom-classname": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "import/no-dynamic-require": "warn",
      "import/no-nodejs-modules": "warn",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
      "import/first": "error",
    },
  }),
]

export default config
