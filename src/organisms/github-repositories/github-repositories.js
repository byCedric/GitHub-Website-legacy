import React from 'react';
import { Col } from 'antd';

import { AsyncRepositories, sortRepositoriesOnStars } from 'src/providers/github';
import Repository from 'src/molecules/repository';

import {
	GithubRepositories,
	GithubRepositoriesRow,
} from './elements';

export default function GithubRepositoriesOrganism() {
	return (
		<GithubRepositories>
			<GithubRepositoriesRow align='middle' gutter={16}>
				<AsyncRepositories>
					<AsyncRepositories.Resolved>
						{data => sortRepositoriesOnStars(data).slice(0, 3).map((repo) => (
							<Col span={8}>
								<Repository
									fullName={repo.full_name}
									description={repo.description}
									stars={repo.stargazers_count}
									language={repo.language}
									forks={repo.forks}
									updatedAt={repo.updated_at}
									url={repo.html_url}
								/>
							</Col>
						))}
					</AsyncRepositories.Resolved>
					<AsyncRepositories.Loading>
						{[0, 0, 0].map(() => (
							<Col span={8}>
								<Repository
									loading
								/>
							</Col>
						))}
					</AsyncRepositories.Loading>
				</AsyncRepositories>
			</GithubRepositoriesRow>
		</GithubRepositories>
	);
}
