import React from 'react';
import GithubEvents from 'src/organisms/github-events';
import GithubUser from 'src/organisms/github-user';

export default function AppPage() {
	return (
		<main role="main">
			<GithubUser />
			<GithubEvents />
		</main>
	);
}
