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
		"plugin:react/recommended"
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	},
	plugins: [
		"react",
		"filenames",
		"jsx-a11y"
	],
	rules: {
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"brace-style": ["error", "1tbs", {
			allowSingleLine: true
		}],
		"block-spacing": ["error", "always"],
		"object-curly-spacing": ["error", "always"],
		"arrow-spacing": ["error"],
		"key-spacing": ["error"],
		"keyword-spacing": ["error"],
		"max-lines": ["warn"],
		"max-params": ["warn"],
		"no-trailing-spaces": ["error"],
		"no-whitespace-before-property": ["error"],
		"filenames/match-regex": ["error", "^[a-z\\-\\.]+$"],
		"prefer-template": ["warn"],
		"space-before-blocks": ["error", "always"],
		"spaced-comment": ["error", "always"],
		"react/prop-types": ["off"],
		"react/prefer-stateless-function": ["error"],
		"react/prefer-es6-class": ["error", "always"],
		"react/wrap-multilines": ["error"],
		"react/sort-comp": ["error"],
		"react/jsx-key": ["error"],
		"react/jsx-boolean-value": ["error", "never"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-curly-spacing": ["error", "never"],
		"react/jsx-equals-spacing": ["error", "never"],
		"react/jsx-space-before-closing": ["error"],
		"jsx-a11y/mouse-events-have-key-events": ["warn"],
		"jsx-a11y/click-events-have-key-events": ["warn"],
		"jsx-a11y/aria-props": ["error"],
		"jsx-a11y/aria-proptypes": ["error"],
		"jsx-a11y/aria-role": ["error"],
		"jsx-a11y/aria-unsupported-elements": ["error"],
		"jsx-a11y/role-has-required-aria-props": ["error"],
		"jsx-a11y/role-supports-aria-props": ["error"]
	}
};