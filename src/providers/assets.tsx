import React from 'react';
import { useFonts } from '@use-expo/font';

const fonts = {
	'lato-bold': require('src/assets/fonts/lato-bold.ttf'),
	'lato-regular': require('src/assets/fonts/lato-regular.ttf'),
};

export const AssetsProvider: React.FC = (props) => {
	useFonts(fonts);

	// note: it can render without, if we block it SSR wont return anything nice
	return <>{props.children}</>;
};
