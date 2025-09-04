import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import {defineConfig} from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: {js},
		extends: ["js/recommended"],
		languageOptions: {globals: globals.node},

		rules: {
			// Define or override rules
			"no-unused-vars": "warn", // Warn about unused variables
			"no-undef": "error", // Error on undefined variables
			"semi": ["error", "always"], // Require semicolons at the end of statements
			"quotes": ["error", "single"], // Enforce single quotes for strings
			"indent": ["error", 2], // Enforce 2-space indentation
		},
	},
	{
		files: ["**/*.json"],
		plugins: {json},
		language: "json/json",
		extends: ["json/recommended"],
	},
]);
