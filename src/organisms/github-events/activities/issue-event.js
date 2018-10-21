import React from 'react';
import { emojify } from 'node-emoji';
import removeMarkdown from 'remove-markdown';
import Card from 'src/molecules/card';

export default function IssueEventActivity(props) {
	if (props.payload.action === 'opened') {
		return (
			<Card
				action={`${props.payload.action} issue`}
				repository={props.repo.name}
				timestamp={props.payload.issue.updated_at}
				title={emojify(props.payload.issue.title)}
				description={removeMarkdown(props.payload.issue.body).trim()}
				link={props.payload.issue.html_url}
			/>
		);
	}

	return null;
}

IssueEventActivity.type = 'IssuesEvent';
