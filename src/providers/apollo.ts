import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClientInstance from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import nextWithApollo from 'next-with-apollo';

export * from '@apollo/react-hooks';
export { default as gql } from 'graphql-tag';
export type ApolloClient = ApolloClientInstance<InMemoryCache>;

export const withApollo = nextWithApollo(
	(options) => {
		const headers = options.headers || {};
		const scheme = headers['x-forwarded-proto'] || 'http';
		const host = headers['x-now-deployment-url']
			|| headers['x-forwarded-host']
			|| headers.host;

		const ssrMode = !process.browser;
		const cache = new InMemoryCache();
		const link = new HttpLink({
			uri: host ? `${scheme}://${host}/api/github` : '/api/github',
		});

		if (options.initialState) {
			cache.restore(options.initialState);
		}

		return new ApolloClientInstance({ ssrMode, cache, link });
	},
);
