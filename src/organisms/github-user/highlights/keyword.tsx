import React from 'react';
import { Decorators } from 'src/atoms/highlight';
import { GithubUserKeywordHighlight } from '../elements';

interface Props {
	/** The text to show for this keyword.  */
	label: string;
}

export default function GithubUserOrganismKeyword(props: Props) {
	return (
		<GithubUserKeywordHighlight>
			{props.label}
		</GithubUserKeywordHighlight>
	);
}

GithubUserOrganismKeyword.decorator = {
	'#': (match, text, key) => <GithubUserOrganismKeyword key={key} label={text} />,
} as Decorators;
