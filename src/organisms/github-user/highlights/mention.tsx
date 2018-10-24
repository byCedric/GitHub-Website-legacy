import React from 'react';
import { Decorators } from 'src/atoms/highlight';
import { GithubUserMentionHighlight } from '../elements';

interface Props {
	/** The text to show for this link or mention. */
	label: string;
	/** The GitHub username to use in the external link. */
	username: string;
}

export default function GithubUserOrganismMention(props: Props) {
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
} as Decorators;
