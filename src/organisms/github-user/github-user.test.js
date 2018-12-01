import React from 'react';
import { mount } from 'enzyme';
import UserMolecule from 'src/molecules/user';
import GithubUser from './github-user';
import highlights from './highlights';

describe('organisms/github-user/github-user', () => {
	it('renders the user molecule component', async () => {
		const data = {
			name: 'Cedric van Putten',
			login: 'byCedric',
			avatar_url: 'https://github.com/bycedric.png',
			bio: 'Lead developer @Peakfijn.',
		};

		const promise = Promise.resolve({ json: () => data });

		global.fetch = jest.fn().mockReturnValue(promise);

		const component = mount(<GithubUser />);
		await promise;

		expect(component.update().find(UserMolecule))
			.toHaveProp('name', data.name)
			.toHaveProp('username', data.login)
			.toHaveProp('avatarUrl', data.avatar_url)
			.toHaveProp('description', data.bio)
			.toHaveProp('highlights', highlights);
	});
});
