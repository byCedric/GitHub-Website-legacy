import React from 'react';
import { AsyncEvents } from 'src/providers/github';
import Button from 'src/atoms/button';
import GithubEventsActivity from './github-events-activity';
import {
	ListContainer,
	ListItem,
	ListAction,
} from './elements';

export default function GithubEventsOrganism() {
	return (
		<ListContainer>
			<AsyncEvents>
				<AsyncEvents.Resolved>
					{data => data.map((activity) => (
						<ListItem key={activity.id}>
							<GithubEventsActivity {...activity} />
						</ListItem>
					))}
				</AsyncEvents.Resolved>
			</AsyncEvents>
			<ListAction>
				<Button>show more</Button>
			</ListAction>
		</ListContainer>
	);
}
