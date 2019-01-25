module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"civicsource/imports",
		"civicsource/style",
		"civicsource/react",
		"civicsource/mocha",
		"prettier" // this should always be last
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	}
};