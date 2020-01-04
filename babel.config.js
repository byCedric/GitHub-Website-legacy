module.exports = {
	presets: ['@expo/next-adapter/babel'],
	plugins: [
		['module-resolver', {
			root: ['.'],
			alias: {
				src: './src',
			},
		}],
		['styled-components', {
			ssr: true,
			displayName: true,
			preprocess: true,
		}],
	],
};
