import React from 'react';
import PropTypes from 'prop-types';
import { GithubUserKeywordHighlight } from '../elements';

export default function GithubUserOrganismKeyword(props) {
	return (
		<GithubUserKeywordHighlight>
			{props.children}
		</GithubUserKeywordHighlight>
	);
}

GithubUserOrganismKeyword.decorator = {
	'#': (match, text, key) => <GithubUserOrganismKeyword key={key} label={text} />,
}

GithubUserOrganismKeyword.propTypes = {
	/** The text to show for this keyword.  */
	label: PropTypes.string.isRequired,
};
