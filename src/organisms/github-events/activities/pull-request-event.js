import React from 'react';
import Event from 'src/molecules/event';

export default function PullRequestEvent(props) {
	return (
		<Event
			type={`${props.payload.action} pull request`}
			title={props.payload.pull_request.title}
			timestamp={props.payload.pull_request.updated_at}
			repository={props.repo.name}
			url={props.payload.pull_request.html_url}
		/>
	);
}

PullRequestEvent.type = 'PullRequestEvent';
