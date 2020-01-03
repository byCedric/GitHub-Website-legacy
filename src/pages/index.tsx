import React from 'react';
import { NextPage } from 'next';
import { logins, links } from 'src/providers/config';
import { Flex } from 'src/atoms/layout';
import { Heading, Paragraph, Link } from 'src/atoms/typography';
import { Icon } from 'src/atoms/icon';
import { GithubAvatar, GithubMeta, useGithubUserQuery } from 'src/molecules/github-user';

const HomePage: NextPage<HomePageProps> = (props) => {
	const query = useGithubUserQuery({
		variables: { login: logins.github },
	});

	if (query.loading) {
		return null;
	}

	return (
		<Flex variant='root'>
			<GithubMeta
				url={props.url}
				name={query.data.user.name}
				bio={query.data.user.bio}
				login='bycedric'
			/>
			<Flex height='50%' justifyContent='flex-end' alignItems='center'>
				<GithubAvatar login={logins.github} margin={2} />
				<Heading maxWidth='user' textAlign='center' padding={2}>
					{query.data.user.name}
				</Heading>
			</Flex>
			<Flex alignItems='center'>
				<Paragraph textAlign='center' maxWidth='user' padding={2}>
					{query.data.user.bio}
				</Paragraph>
				<Flex flexDirection='row' margin={2}>
					{links.map(link => (
						<Link key={link.type} href={link.url} target='_blank'>
							<Icon name={link.icon} padding={2} />
						</Link>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

HomePage.getInitialProps = async (ctx) => ({
	url: typeof window === 'undefined'
		? ctx.req?.headers?.host
		: window.location.hostname,
});

interface HomePageProps {
	/** The absolute (base) url of the website */
	url: string;
}

export default HomePage;
