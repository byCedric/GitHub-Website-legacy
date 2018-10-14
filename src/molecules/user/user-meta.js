import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { findMentions } from 'src/providers/github';

export default function UserMoleculeMeta(props) {
	const title = props.description
		? `${props.title} – ${props.description}`
		: props.title;

	const keywords = props.description
		? props.keywords.concat(findMentions(props.description))
		: props.keywords;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={props.description} />
			<meta name="keywords" content={keywords.join(', ')} />
		</Helmet>
	);
}

UserMoleculeMeta.propTypes = {
	/** The full page title to use. */
	title: PropTypes.string.isRequired,
	/** A list of all keywords of this person, in relevant order. */
	keywords: PropTypes.arrayOf(PropTypes.string),
	/** An optional description of this person. */
	description: PropTypes.string,
};

UserMoleculeMeta.defaultProps = {
	keywords: [],
	description: '',
};
