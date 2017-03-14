module.exports = {
	plugins: [
		"require-in-package"
	],
	rules: {
		// ERRORS

		// depend on the things you depend on
		// https://github.com/Craftsy/eslint-plugin-require-in-package
		"require-in-package/require-in-package": "error"
	}
};