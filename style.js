module.exports = {
	plugins: [
		"filenames"
	],
	rules: {
		// ERRORS

		// we indent with tabs not spaces because we aren't a roving band of marauders
		// http://eslint.org/docs/rules/indent
		"indent": ["error", "tab"],

		// enforce double quotes for strings
		// http://eslint.org/docs/rules/quotes
		"quotes": ["error", "double"],

		// require semicolons
		// http://eslint.org/docs/rules/semi
		"semi": ["error", "always"],

		// the "one true brace style"
		// http://eslint.org/docs/rules/brace-style
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],

		// don't jumble everything together inside of code blocks
		// http://eslint.org/docs/rules/block-spacing
		"block-spacing": ["error", "always"],

		// don't jumble the start of code blocks together
		// http://eslint.org/docs/rules/space-before-blocks
		"space-before-blocks": ["error", "always"],

		// don't jumble everything together inside of object definitions
		// http://eslint.org/docs/rules/object-curly-spacing
		"object-curly-spacing": ["error", "always"],

		// spaces before & after =>
		// http://eslint.org/docs/rules/arrow-spacing
		"arrow-spacing": ["error"],

		// object keys: one space after, none before
		// http://eslint.org/docs/rules/key-spacing
		"key-spacing": ["error"],

		// don't jumble keywords
		// http://eslint.org/docs/rules/keyword-spacing
		"keyword-spacing": ["error"],

		// don't leave little turds of whitespace at the end of lines
		// http://eslint.org/docs/rules/no-trailing-spaces
		"no-trailing-spaces": ["error"],

		// put a space after the comment slashes
		// http://eslint.org/docs/rules/spaced-comment
		"spaced-comment": ["error", "always"],

		// don't do weird stuff with dot notation
		// http://eslint.org/docs/rules/no-whitespace-before-property
		"no-whitespace-before-property": ["error"],

		// enforce lowercase kebab case for filenames
		// we have had issues in the past with case sensitivity & module resolution
		// https://github.com/selaux/eslint-plugin-filenames
		"filenames/match-regex": ["error", "^[a-z\-\.]+$"],

		// =======================================================================================
		// WARNINGS

		// don't write a whole application in one single js file (default 301 lines is too big)
		// http://eslint.org/docs/rules/max-lines
		"max-lines": ["warn"],

		// don't make ridiculous functions that take billions upon billions of arguments
		// http://eslint.org/docs/rules/max-params
		"max-params": ["warn", { max: 4 }],

		// don't concatenate strings like a n00b
		// http://eslint.org/docs/rules/prefer-template
		"prefer-template": ["warn"],

		// force curly braces for control-flow blocks unless it is single line
		// http://eslint.org/docs/rules/curly
		"curly": ["warn", "multi-line"]
	}
};