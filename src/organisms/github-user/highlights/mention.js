import React from 'react';
import PropTypes from 'prop-types';
import { GithubUserMentionHighlight } from '../elements';

export default function GithubUserOrganismMention(props) {
	return (
		<GithubUserMentionHighlight
			href={`https://github.com/${props.username}`}
			target='_blank'
			rel='noopener noreferrer'
		>
			{props.label}
		</GithubUserMentionHighlight>
	);
}

GithubUserOrganismMention.decorator = {
	'@': (match, text, key) => (
		<GithubUserOrganismMention
			key={key}
			label={match}
			username={text}
		/>
	),
};

GithubUserOrganismMention.propTypes = {
	/** The text to show for this link or mention.  */
	label: PropTypes.string.isRequired,
	/** The GitHub username to use in the external link. */
	username: PropTypes.string.isRequired,
};
