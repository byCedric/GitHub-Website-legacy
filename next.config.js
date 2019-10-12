require('dotenv/config');

module.exports = {
	experimental: {
		publicDirectory: true,
	},
	env: {
		GITHUB_USERNAME: process.env.GITHUB_USERNAME,
	},
};
