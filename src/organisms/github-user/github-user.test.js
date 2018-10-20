import React from 'react';
import { mount } from 'enzyme';
import UserMolecule from 'src/molecules/user';
import GithubUser from './github-user';
import highlights from './highlights';

const data = {
	name: 'Cedric van Putten',
	login: 'byCedric',
	avatar_url: 'https://github.com/bycedric.png',
	bio: 'Lead developer @Peakfijn.',
};

describe('organisms/github-user/github-user', () => {
	it('renders the user molecule component', async () => {
		const promise = Promise.resolve({ json: () => data });

		global.fetch = jest.fn().mockReturnValue(promise);

		const parentComponent = mount(<GithubUser />);
		const childComponent = mount(
			<UserMolecule
				name={data.name}
				username={data.login}
				avatarUrl={data.avatar_url}
				description={data.bio}
				highlights={highlights}
			/>
		);

		await promise;

		// because of the inline render function we can't use `.find()`
		expect(parentComponent.html()).toContain(childComponent.html());
	});
});
