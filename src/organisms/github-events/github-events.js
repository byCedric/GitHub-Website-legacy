import React, { Fragment } from 'react';
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
				<AsyncEvents.Resolved persist>
					{(data, state) => (
						<Fragment>
							{data.events.map((activity) => (
								<ListItem key={activity.id}>
									<GithubEventsActivity {...activity} />
								</ListItem>
							))}
							<ListAction>
								<Button
									onClick={() => state.run({ page: data.page + 1})}
									disabled={!data.hasNext}
								>
									show more
								</Button>
							</ListAction>
						</Fragment>
					)}
				</AsyncEvents.Resolved>

			</AsyncEvents>
		</ListContainer>
	);
}
