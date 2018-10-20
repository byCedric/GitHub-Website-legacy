import React from 'react';
import { shallow } from 'enzyme';
import GithubUserOrganism from 'src/organisms/github-user';
import App from './app';

describe('pages/app/app', () => {
	it('renders github organism component', () => {
		expect(shallow(<App />).find(GithubUserOrganism))
			.toExist();
	});
});
