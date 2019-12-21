import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClientInstance from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import nextWithApollo from 'next-with-apollo';

export * from '@apollo/react-hooks';
export { default as gql } from 'graphql-tag';
export type ApolloClient = ApolloClientInstance<InMemoryCache>;

export const withApollo = nextWithApollo(
	(options) => {
		const ssrMode = !process.browser;
		const port = process.env.PORT || '3000';
		const cache = new InMemoryCache();
		const link = new HttpLink({
			uri: ssrMode ? `http://localhost:${port}/api/github` : '/api/github',
		});

		if (options.initialState) {
			cache.restore(options.initialState);
		}

		return new ApolloClientInstance({ ssrMode, cache, link });
	},
);
