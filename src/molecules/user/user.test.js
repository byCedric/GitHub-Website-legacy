import React from 'react';
import { mount } from 'enzyme';
import Avatar from 'src/atoms/avatar';
import Highlight from 'src/atoms/highlight';
import User from './user';
import UserMeta from './user-meta';

describe('molecules/user/user', () => {
	it('renders an avatar component with the avatar url', () => {
		const component = mount(
			<User
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
			/>
		);

		expect(component.find(Avatar))
			.toHaveProp('url', 'https://github.com/bycedric.png')
			.toHaveProp('name', 'Cedric van Putten (byCedric)')
			.toHaveProp('title', 'Cedric van Putten (byCedric)');
	});

	it('renders a header with the user (full) name', () => {
		const component = mount(
			<User
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
			/>
		);

		expect(component.find('h1'))
			.toHaveText('Cedric van Putten');
	});

	it('renders a highlight component with the user description', () => {
		const highlighters = { '#': () => 'hashtag' };
		const component = mount(
			<User
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
				description='Lead developer @Peakfijn.'
				highlights={highlighters}
			/>
		);

		expect(component.find(Highlight))
			.toHaveText('Lead developer @Peakfijn.')
			.toHaveProp('decorators', highlighters);
	});

	it('renders the user meta component', () => {
		const component = mount(
			<User
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
				description='Lead developer @Peakfijn.'
			/>
		);

		expect(component.find(UserMeta))
			.toHaveProp('name', 'Cedric van Putten')
			.toHaveProp('username', 'byCedric')
			.toHaveProp('avatarUrl', 'https://github.com/bycedric.png')
			.toHaveProp('description', 'Lead developer @Peakfijn.');
	});
});
