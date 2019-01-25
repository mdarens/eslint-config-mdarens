module.exports = {
	env: {
		node: true,
		mocha: true
	},
	plugins: [
		"mocha"
	],
	rules: {
		// don't be disabling all our test cases because you accidentally committed some debug code
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md
		"mocha/no-exclusive-tests": ["error"],

		// don't be nesting its cuz that is weird & error-prone
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-nested-tests.md
		"mocha/no-nested-tests": ["error"],

		// don't write tests that never finish
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md
		"mocha/handle-done-callback": ["error"],

		// one scenario per test file
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/max-top-level-suites.md
		"mocha/max-top-level-suites": ["error"],

		// don't have random its floating around without a valid scenario
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md
		"mocha/no-global-tests": ["error"],

		// don't copy pasta tests haphazardly
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md
		"mocha/no-identical-title": ["error"],

		// "this" in mocha is important; don't be writing ES2015 arrow functions
		// https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-mocha-arrows.md
		"mocha/no-mocha-arrows": ["error"]
	}
};