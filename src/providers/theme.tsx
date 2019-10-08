import { BaseStyles, theme } from '@primer/components';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeProvider: React.SFC = (props) => (
	<StyledThemeProvider theme={theme}>
		<BaseStyles>
			{props.children}
		</BaseStyles>
	</StyledThemeProvider>
);
