import React from 'react';
import getConfig from 'next/config';
import { gql, useQuery } from 'src/providers/apollo';

const QUERY = gql`
	query user($login: String!) {
		user(login: $login) {
			name
			bioHTML
			url
			avatarUrl
		}
	}
`;

const getLogin = () => getConfig().publicRuntimeConfig.githubLogin;

const HomePage: React.SFC = () => {
	const query = useQuery(QUERY, { variables: { login: getLogin() } });

	if (query.loading || !query.data) {
		return null;
	}

	return (
		<Box padding={4}>
			<Flex
				minHeight='50vh'
				flexDirection='column'
				alignItems='center'
				justifyContent='flex-end'
			>
				<Avatar size={90} src={query.data.user.avatarUrl} style={{ borderRadius: '50%' }} />
				<Box marginTop={2}>
					<Heading textAlign='center'>{query.data.user.name}</Heading>
				</Box>
			</Flex>
			<Flex justifyContent='center'>
				<Box maxWidth='24em'>
					<Text
						as='p'
						lineHeight='1.75'
						textAlign='center'
						color='gray.6'
						dangerouslySetInnerHTML={{
							__html: String(query.data.user.bioHTML).replace(/<\/?div>/ig, ''),
						}}
					/>
				</Box>
			</Flex>
		</Box>
	);
};

export default HomePage;
