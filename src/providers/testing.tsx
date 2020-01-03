import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'src/providers/theme';
import 'jest-styled-components/native';

const TestProvider: React.FC = (props) => (
	<ThemeProvider>
		{props.children}
	</ThemeProvider>
);

const customRender = (ui: React.ReactElement<any>, options?: RenderOptions) => (
	render(ui, { wrapper: TestProvider, ...options })
);

export * from '@testing-library/react-native';
export { customRender as render };
