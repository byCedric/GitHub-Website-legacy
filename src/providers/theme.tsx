import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeProvider: React.SFC = (props) => (
	<StyledThemeProvider theme={theme}>
		<>{props.children}</>
	</StyledThemeProvider>
);

export const theme = {
	//
};
