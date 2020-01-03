import NextApp from 'next/app';
import React from 'react';
import { ApolloClient, ApolloProvider, withApollo } from 'src/providers/apollo';
import { ThemeProvider } from 'src/providers/theme';
import { AssetsProvider } from 'src/providers/assets';

class App extends NextApp<{ apollo: ApolloClient }> {
	render() {
		const { Component, pageProps, apollo } = this.props;

		return (
			<AssetsProvider>
				<ThemeProvider>
					<ApolloProvider client={apollo}>
						<Component {...pageProps} />
					</ApolloProvider>
				</ThemeProvider>
			</AssetsProvider>
		);
	}
}

export default withApollo(App);
