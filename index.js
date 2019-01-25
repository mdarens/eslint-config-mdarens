module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"civicsource/imports",
		"civicsource/style",
		"civicsource/react",
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