module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"mdarens/imports",
		"mdarens/style",
		"mdarens/react",
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
