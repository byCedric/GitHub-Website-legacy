import React from 'react';
import removeMarkdown from 'remove-markdown';
import Card from 'src/molecules/card';

export default function PullRequestEventActivity(props) {
	if (props.payload.action === 'opened') {
		return (
			<Card
				action={`${props.payload.action} pull request`}
				repository={props.repo.name}
				timestamp={props.payload.pull_request.updated_at}
				title={props.payload.pull_request.title}
				description={removeMarkdown(props.payload.pull_request.body).trim()}
				link={props.payload.pull_request.html_url}
			/>
		);
	}

	return null;
}

PullRequestEventActivity.type = 'PullRequestEvent';
