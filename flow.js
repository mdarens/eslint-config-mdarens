module.exports = {
	extends: [
		"plugin:flowtype/recommended"
	],
	plugins: [
		"flowtype"
	],
	rules: {
		"flowtype/require-valid-file-annotation": ["error", "never", { annotationStyle: "block" }],
		"flowtype/type-id-match": ["error"],
		"flowtype/delimiter-dangle": ["error", "never"],
		"flowtype/no-weak-types": ["error"],
		"flowtype/semi": ["error", "always"]
	}
};