import React from 'react';
import { mount } from 'enzyme';
import {
	username,
	findKeywords,
	fetchUser,
	AsyncUser,
	fetchEvents,
	AsyncEvents,
} from './github';

describe('providers/github', () => {
	describe('username', () => {
		it('is defined', () => {
			expect(username).toBeDefined();
		});
	});

	describe('findKeywords', () => {
		it('finds mentions from text', () => {
			expect(findKeywords('Something something @github something @bycedric.'))
				.toHaveLength(2)
				.toContain('github')
				.toContain('bycedric');
		});

		it('finds hastags from text', () => {
			expect(findKeywords('Something maintainer #project something #other.'))
				.toHaveLength(2)
				.toContain('project')
				.toContain('other');
		});

		it('finds mention and hastag from text', () => {
			expect(findKeywords('Something @github something maintainer #project.'))
				.toHaveLength(2)
				.toContain('github')
				.toContain('project');
		});

		it('returns empty array when nothing is found', () => {
			expect(findKeywords('Something something something.')).toHaveLength(0);
		});
	});

	describe('fetchUser', () => {
		it('fetches the github user data', async () => {
			global.fetch = jest.fn().mockResolvedValue({ json: () => ({ username }) });

			expect(await fetchUser()).toEqual({ username });
			expect(fetch).toHaveBeenCalledWith(`https://api.github.com/users/${username}`);
		});
	});

	describe('AsyncUser', () => {
		it('fetches the github user data with react async', async () => {
			const promise = Promise.resolve({ json: () => ({ username }) });

			global.fetch = jest.fn(() => promise);

			const component = mount(
				<AsyncUser>
					{state => (state.data && state.data.username) || null}
				</AsyncUser>
			);

			expect(component).toBeEmptyRender();

			await promise;

			expect(component).toIncludeText(username);
			expect(fetch).toHaveBeenCalled();
		});
	});

	describe('fetchEvents', () => {
		it('fetches the public github events', async () => {
			global.fetch = jest.fn().mockResolvedValue({ json: () => ['event'] });

			expect(await fetchEvents()).toContain('event');
			expect(fetch).toHaveBeenCalledWith(`https://api.github.com/users/${username}/events/public?per_page=100`);
		});
	});

	describe('AsyncEvents', () => {
		it('fetches the public github events with react async', async () => {
			const promise = Promise.resolve({ json: () => ['event'] });

			global.fetch = jest.fn(() => promise);

			const component = mount(
				<AsyncEvents>
					{state => (state.data && state.data[0]) || null}
				</AsyncEvents>
			);

			expect(component).toBeEmptyRender();

			await promise;

			expect(component).toIncludeText('event');
			expect(fetch).toHaveBeenCalled();
		});
	});
});
