import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar';

describe('atoms/avatar', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		const component = (
			<Avatar
				url="https://avatars2.githubusercontent.com/u/1203991?v=4"
				name="Cedric van Putten"
				title="Cedric van Putten - @byCedric"
			/>
		);

		ReactDOM.render(component, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
