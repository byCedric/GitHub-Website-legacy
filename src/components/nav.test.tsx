import { render } from '@testing-library/react';
import React from 'react';
import Nav from './nav';

it('renders link to zeit', () => {
	expect(render(<Nav />).getByText('ZEIT')).toHaveProperty('href', 'https://zeit.co/now');
});

it('renders link to github', () => {
	expect(render(<Nav />).getByText('GitHub')).toHaveProperty('href', 'https://github.com/zeit/next.js');
});
