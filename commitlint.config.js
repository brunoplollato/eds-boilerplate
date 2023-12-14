const { list } = require("./changelog.config.js");

module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [2, "always", list],
	},
};
