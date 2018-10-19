import { createInstance } from 'react-async';

/**
 * The GitHub username to fetch information from.
 */
export const username = process.env.REACT_APP_GITHUB_USERNAME || 'byCedric';

/**
 * Get all (GitHub) keywords from a text.
 * It will find all words starting with `@` or `#` and return then without this character.
 *
 * @param  {string?} text
 * @return {string[]}
 */
export const findKeywords = (text) => (
	((text || '').match(/[@#]([a-z0-9]+)/gi) || []).map(value => value.substr(1))
);

/**
 * Fetch the user information from the GitHub API.
 *
 * @see    https://developer.github.com/v3/users/#get-a-single-user
 * @return {Promise}
 */
export const fetchUser = () => (
	fetch(`https://api.github.com/users/${username}`)
		.then(response => response.json())
)

/**
 * Export a predefined React Async component instance to fetch the user.
 * This creates a custom context for improved nesting and predefines the promise.
 *
 * @see    https://github.com/ghengeveld/react-async
 * @return {React.Component}
 */
export const AsyncUser = createInstance({ promiseFn: fetchUser });

/**
 * Fetch the user (public) events from the GitHub API.
 *
 * @see    https://developer.github.com/v3/activity/events/
 * @return {Promise}
 */
export const fetchEvents = () => (
	fetch(`https://api.github.com/users/${username}/events/public?per_page=100`)
		.then(response => response.json())
);

/**
 * Export a predefined React Async component instance to fetch the events.
 * This creates a custom context for improved nesting and predefines the promise.
 *
 * @see    https://github.com/ghengeveld/react-async
 * @return {React.Component}
 */
export const AsyncEvents = createInstance({ promiseFn: fetchEvents });
