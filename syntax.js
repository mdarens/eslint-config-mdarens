module.exports = {
	extends: [
		"plugin:import/errors"
	],
	plugins: [
		"import"
	],
	settings: {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".json"]
			}
		}
	}
};