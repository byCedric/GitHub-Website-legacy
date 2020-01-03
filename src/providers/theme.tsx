import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { Theme as SystemTheme } from 'styled-system';

export const ThemeProvider: React.FC = (props) => {
	const colorScheme = useColorScheme();

	return (
		<AppearanceProvider>
			<StyledThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
				{props.children}
			</StyledThemeProvider>
		</AppearanceProvider>
	);
};

const themeScales: SystemTheme = {
	colors: {
		white: '#FFFFFE',
		black: '#000000',
		gray: '#A7A9BE',
		coal: '#0F0E17',
	},
	fonts: {
		lato: {
			bold: 'lato-bold',
			regular: 'lato-regular',
		},
	},
	fontSizes: [10, 12, 14, 16, 18, 24, 32],
	lineHeights: [14, 16, 18, 24, 28, 32, 38],
	radii: {
		avatar: '50%',
		card: 8,
	},
	sizes: {
		avatar: 96,
		user: 384,
	},
	space: [0, 4, 8, 12, 16, 32],
};

const themeStylingDark = {
	layout: {
		root: {
			backgroundColor: 'coal',
			color: 'gray',
			fontFamily: 'lato.regular',
			flex: '1',
			paddingY: 5,
		},
		card: {
			backgroundColor: 'white',
			borderRadius: 'card',
		},
		avatar: {
			width: 'avatar',
			height: 'avatar',
			borderRadius: 'avatar',
			backgroundColor: 'black',
		},
	},
	typography: {
		heading: {
			color: 'white',
			fontFamily: 'lato.bold',
			fontSize: 6,
		},
		paragraph: {
			fontFamily: 'lato.regular',
			fontSize: 3,
			lineHeight: 3,
		},
		link: {
			transition: 'color 0.5s ease-out',
		},
		links: {
			hover: { color: 'white' },
		},
	},
};

const themeStylingLight = {
	layout: {
		root: {
			backgroundColor: 'white',
			color: '#6a737d',
			fontFamily: 'lato.regular',
			flex: '1',
			paddingY: 5,
		},
		card: {
			backgroundColor: 'white',
			borderRadius: 'card',
		},
		avatar: {
			width: 'avatar',
			height: 'avatar',
			borderRadius: 'avatar',
			backgroundColor: 'black',
		},
	},
	typography: {
		heading: {
			color: 'coal',
			fontFamily: 'lato.bold',
			fontSize: 6,
		},
		paragraph: {
			fontFamily: 'lato.regular',
			fontSize: 3,
			lineHeight: 3,
		},
		link: {
			transition: 'color 0.5s ease-out',
		},
		links: {
			hover: { color: 'coal' },
		},
	},
};

export const darkTheme = {
	...themeScales,
	...themeStylingDark,
};

export const lightTheme = {
	...themeScales,
	...themeStylingLight,
};
