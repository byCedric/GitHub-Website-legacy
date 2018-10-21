import React from 'react';
import removeMarkdown from 'remove-markdown';
import Card from 'src/molecules/card';

export default function ReleaseEventActivity(props) {
	if (props.payload.action === 'published') {
		return (
			<Card
				action={`${props.payload.action} release`}
				timestamp={props.payload.release.created_at}
				title={`${props.repo.name} version ${props.payload.release.name}`}
				description={removeMarkdown(props.payload.release.body).trim()}
				link={props.payload.release.html_url}
			/>
		);
	}

	return null;
}

ReleaseEventActivity.type = 'ReleaseEvent';
