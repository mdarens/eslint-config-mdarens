module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"civicsource/style",
		"civicsource/react"
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	}
};