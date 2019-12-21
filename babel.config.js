module.exports = {
	presets: ['next/babel'],
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		['module-resolver', {
			root: ['.'],
			alias: { src: './src' },
		}],
		['styled-components', {
			ssr: true,
			displayName: true,
			preprocess: true,
		}],
	],
};
