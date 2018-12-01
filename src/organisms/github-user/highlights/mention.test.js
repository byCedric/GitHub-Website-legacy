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
			HighlightMention.decorator['@']('match', 'text')
		);

		expect(component.update().find(HighlightMention))
			.toHaveProp('label', 'match')
			.toHaveProp('username', 'text');
	});
});
