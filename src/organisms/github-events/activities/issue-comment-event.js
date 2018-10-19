import React from 'react';
import Event from 'src/molecules/event';

export default function ActivityIssueCommentEvent(props) {
	return (
		<Event
			type={`${props.payload.action} comment`}
			title={props.payload.comment.body}
			description={props.payload.issue.title}
			timestamp={props.payload.comment.created_at}
			repository={props.repo.name}
			url={props.payload.comment.html_url}
		/>
	);
}

ActivityIssueCommentEvent.type = 'IssueCommentEvent';
