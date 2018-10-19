import React from 'react';
import { AsyncEvents } from 'src/providers/github';
import GithubEventsActivity from './github-events-activity';

export default function GithubEventsOrganism() {
	return (
		<AsyncEvents>
			<AsyncEvents.Resolved>
				{data => data.map((activity) => (
					<GithubEventsActivity key={activity.id} {...activity} />
				))}
			</AsyncEvents.Resolved>
		</AsyncEvents>
	);
}
