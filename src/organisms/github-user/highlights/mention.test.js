import React from 'react';
import { mount } from 'enzyme';
import HighlightMention from './mention';

describe('organisms/github-user/highlights/mention', () => {
	it('renders a link element with github link', () => {
		const component = mount(
			<HighlightMention
				label='@byCedric'
				username='byCedric'
			/>
		);

		expect(component.find('a'))
			.toHaveText('@byCedric')
			.toMatchSelector('[href="https://github.com/byCedric"]')
			.toMatchSelector('[target="_blank"]');
	});

	it('defines a (partial) decorator for "@" character', () => {
		const component = mount(
			HighlightMention.decorator['@']('match', 'text', '1337')
		);

		expect(component.find('a'))
			.toHaveText('match')
			.toMatchSelector('[href="https://github.com/text"]');
	});
});
