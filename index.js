module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"civicsource/imports",
		"civicsource/style",
		"civicsource/react",
		"civicsource/flow",
		"civicsource/mocha"
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	}
};