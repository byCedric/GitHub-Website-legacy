/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv/config');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');

const config = {
	projectRoot: __dirname,
	env: {
		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		WEB_URL: process.env.WEB_URL,
		GITHUB_LOGIN: process.env.GITHUB_LOGIN,
		TWITTER_LOGIN: process.env.TWITTER_LOGIN,
		DEVTO_LOGIN: process.env.DEVTO_LOGIN,
	},
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
