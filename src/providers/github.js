import { createInstance } from 'react-async';

/**
 * The GitHub username to fetch information from.
 */
export const username = process.env.REACT_APP_GITHUB_USERNAME || 'byCedric';

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
 * Export a predefined React Async component instance.
 * This creates a custom context for improved nesting and predefines the promise.
 *
 * @see    https://github.com/ghengeveld/react-async
 * @return {React.Component}
 */
export const AsyncUser = createInstance({ promiseFn: fetchUser });

/**
 * Get all GitHub mentions from a text.
 * This will try and find all words starting with `@` and return them as array, without extra character.
 *
 * @param  {string?} text
 * @return {string[]}
 */
export const findMentions = (text) => (
	(text || '').match(/[@#]([a-z0-9]+)/gi).map(value => value.substr(1))
);
