import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'src/providers/theme';

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}

export default App;
