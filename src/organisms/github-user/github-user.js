import React from 'react';
import { AsyncUser } from 'src/providers/github';
import User from 'src/molecules/user';
import highlights from './highlights';

export default function GithubUserOrganism() {
	return (
		<AsyncUser>
			<AsyncUser.Resolved>
				{data => (
					<User
						name={data.name}
						username={data.login}
						avatarUrl={data.avatar_url}
						description={data.bio}
						highlights={highlights}
					/>
				)}
			</AsyncUser.Resolved>
		</AsyncUser>
	);
}
