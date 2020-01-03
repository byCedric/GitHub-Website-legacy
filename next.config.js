/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');

dotenv.config()
dotenvExpand(process.env);

const config = {
	projectRoot: __dirname,
	env: {
		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		WEB_URL: process.env.WEB_URL,
		GITHUB_LOGIN: process.env.GITHUB_LOGIN,
		TWITTER_LOGIN: process.env.TWITTER_LOGIN,
		DEVTO_LOGIN: process.env.DEVTO_LOGIN,
	},
	// serverRuntimeConfig: {
	// },
	// publicRuntimeConfig: {
	// },
	typescript: {
		ignoreDevErrors: true,
		ignoreBuildErrors: true,
	},
	experimental: {
		reactStrictMode: true,
	},
};

module.exports = withExpo(
	withFonts(config)
);
