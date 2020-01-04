import { gql, useQuery, QueryHookOptions } from 'src/providers/apollo';

export const GITHUB_USER_QUERY = gql`
	query user($login: String!) {
		user(login: $login) {
			name
			bio
			avatarUrl
			login
		}
	}
`;

export const useGithubUserQuery = (options?: QueryHookOptions) => (
	useQuery(GITHUB_USER_QUERY, options)
);
