import React from 'react';
import { mount } from 'enzyme';
import Helmet from 'react-helmet';
import UserMeta from './user-meta';

describe('molecules/user/user-meta', () => {
	it('renders correct title and keywords', () => {
		mount(
			<UserMeta
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
			/>
		);

		const peek = Helmet.peek();

		expect(peek.title).toBe('Cedric van Putten (byCedric)');
		expect(peek.metaTags)
			.toContainEqual({ name: 'keywords', content: 'Cedric van Putten, byCedric' })
			.toContainEqual({ name: 'description', content: '' });
	});

	it('renders correct title, keywords and description', () => {
		mount(
			<UserMeta
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
				description='Lead developer @Peakfijn.'
			/>
		);

		const peek = Helmet.peek();

		expect(peek.title).toBe('Cedric van Putten (byCedric) - Lead developer @Peakfijn.');
		expect(peek.metaTags)
			.toContainEqual({ name: 'keywords', content: 'Cedric van Putten, byCedric, Peakfijn' })
			.toContainEqual({ name: 'description', content: 'Lead developer @Peakfijn.' });
	});

	it('renders correct open graph title, description and image', () => {
		mount(
			<UserMeta
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
				description='Lead developer @Peakfijn.'
			/>
		);

		expect(Helmet.peek().metaTags)
			.toContainEqual({ property: 'og:title', content: 'Cedric van Putten (byCedric) - Lead developer @Peakfijn.' })
			.toContainEqual({ property: 'og:description', content: 'Lead developer @Peakfijn.' })
			.toContainEqual({ property: 'og:image', content: 'https://github.com/bycedric.png?size=240' });
	});

	it('renders correct open graph profile username, first and last name', () => {
		mount(
			<UserMeta
				name='Cedric van Putten'
				username='byCedric'
				avatarUrl='https://github.com/bycedric.png'
			/>
		);

		expect(Helmet.peek().metaTags)
			.toContainEqual({ property: 'profile:username', content: 'byCedric' })
			.toContainEqual({ property: 'profile:first_name', content: 'Cedric' })
			.toContainEqual({ property: 'profile:last_name', content: 'van Putten' });
	});
});
