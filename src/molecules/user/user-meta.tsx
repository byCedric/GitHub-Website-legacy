import React from 'react';
import Helmet from 'react-helmet';
import { findKeywords } from 'src/providers/github';
import { Props, defaultProps } from './props';

export default function UserMoleculeMeta(props: Props) {
	const title = props.description
		? `${props.name} (${props.username}) - ${props.description}`
		: `${props.name} (${props.username})`;

	const keywords = props.description
		? [props.name, props.username].concat(findKeywords(props.description))
		: [props.name, props.username];

	const nameSegments = props.name.split(' ');
	const nameFirst = nameSegments.shift();
	const nameLast = nameSegments.join(' ');

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={props.description} />
			<meta name="keywords" content={keywords.join(', ')} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={props.description} />
			<meta property="og:image" content={`${props.avatarUrl}?size=240`} />
			<meta property="profile:username" content={props.username} />
			<meta property="profile:first_name" content={nameFirst} />
			<meta property="profile:last_name" content={nameLast} />
		</Helmet>
	);
}

UserMoleculeMeta.defaultProps = defaultProps;
