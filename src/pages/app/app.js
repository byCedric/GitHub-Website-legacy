import React from 'react';
import "antd/dist/antd.css";
import GithubUser from 'src/organisms/github-user';
import GithubRepositories from 'src/organisms/github-repositories';
import { AppContainer } from './elements';

export default function AppPage() {
	return (
		<AppContainer>
			<GithubUser />
			<GithubRepositories />
		</AppContainer>
	);
}
