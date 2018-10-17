import React from 'react';
import PropTypes from 'prop-types';

const MENTIONS_PATTERN = /@([a-z0-9]+)/gi;

export default function GithubMentionsAtom(props) {
	console.log('PROPS', props);
	const splitText = props.children.split(MENTIONS_PATTERN);
	const matches = props.children.match(MENTIONS_PATTERN);

	if (!splitText) return props.children;

	return (
		<p>
			{splitText.reduce((arr, element) => {
				if (!element) return arr;

				if (matches.includes(`@${element}`)) {
					return [
						...arr,
						(<a href={`https://github.com/${element}`} target="_blank" rel="noopener noreferrer">
							@{element}
						</a>),
					];
				}

				return [...arr, element];
			}, [])}
		</p>
	);
}

GithubMentionsAtom.propTypes = {
	/** The content that has mentions that needs transformed to GitHub links */
	children: PropTypes.string.isRequired,
};

GithubMentionsAtom.defaultProps = {
	children: '',
};
