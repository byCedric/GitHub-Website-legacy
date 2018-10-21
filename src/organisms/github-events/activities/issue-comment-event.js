import React from 'react';
import { emojify } from 'node-emoji';
import removeMarkdown from 'remove-markdown';
import Card from 'src/molecules/card';

export default function IssueCommentEventActivity(props) {
	return (
		<Card
			action={`${props.payload.action} comment`}
			repository={props.repo.name}
			timestamp={props.payload.comment.created_at}
			title={emojify(props.payload.comment.body)}
			description={removeMarkdown(props.payload.comment.body)}
			link={props.payload.comment.html_url}
		/>
	);
}

IssueCommentEventActivity.type = 'IssueCommentEvent';
