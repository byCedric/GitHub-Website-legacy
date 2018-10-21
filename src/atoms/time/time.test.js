import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import Time from './time';

const timestamp = '2018-10-21T12:19:51Z';

describe('atoms/time/time', () => {
	it('renders a time element', () => {
		const formatted = moment(timestamp).format('MMMM DD Y, HH:mm');
		const component = mount(<Time timestamp={timestamp} />);

		expect(component.find('time'))
			.toExist()
			.toHaveText(formatted)
			.toMatchSelector(`[title="${formatted}"]`)
			.toMatchSelector(`[dateTime="${timestamp}"]`);
	});

	it('renders a time element with custom format', () => {
		const formatted = moment(timestamp).format('DD/MM/Y');
		const component = mount(
			<Time
				timestamp={timestamp}
				format='DD/MM/Y'
			/>
		);

		expect(component.find('time'))
			.toHaveText(formatted)
			.toMatchSelector(`[title="${formatted}"]`);
	});

	it('renders a time element relatively from now', () => {
		const formatted = moment(timestamp).fromNow();
		const component = mount(<Time timestamp={timestamp} relative />);

		expect(component.find('time'))
			.toHaveText(formatted)
			.toMatchSelector(`[dateTime="${timestamp}"]`);
	});
});
