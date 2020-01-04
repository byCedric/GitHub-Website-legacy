/**
 * All configured (social) logins from environment.
 */
export const logins = {
	github: process.env.GITHUB_LOGIN,
	twitter: process.env.TWITTER_LOGIN,
	devto: process.env.DEVTO_LOGIN,
};

/**
 * A list of all external links, with the URL and login.
 * This will filter empty logins from the list.
 */
export const links = [
	{
		type: 'github',
		icon: 'github-box',
		url: `https://github.com/${logins.github}`,
		login: logins.github,
	},
	{
		type: 'twitter',
		icon: 'twitter-box',
		url: `https://twitter.com/${logins.twitter}`,
		login: logins.twitter,
	},
	{
		type: 'devto',
		icon: 'dev-to',
		url: `https://dev.to/${logins.devto}`,
		login: logins.devto,
	},
].filter(link => !!link.login);
