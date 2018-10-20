import React from 'react';
import { mount } from 'enzyme';
import HighlightKeyword from './keyword';

describe('organisms/github-user/highlights/keyword', () => {
	it('renders a simple element with keyword', () => {
		const component = mount(
			<HighlightKeyword label='#repo' />
		);

		expect(component).toHaveText('#repo');
	});

	it('defines a (partial) decorator for "#" character', () => {
		const component = mount(
			HighlightKeyword.decorator['#']('match', 'text', '1337')
		);

		expect(component).toHaveText('text');
	});
});
