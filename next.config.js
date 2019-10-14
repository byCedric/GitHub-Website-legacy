require('dotenv/config');

module.exports = {
	experimental: {
		publicDirectory: true,
	},
	serverRuntimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
	},
	publicRuntimeConfig: {
		githubLogin: process.env.GITHUB_LOGIN,
	},
};
