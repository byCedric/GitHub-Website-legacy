import IssueCommentEvent from './issue-comment-event';
import IssueEvent from './issue-event';
import PullRequestEvent from './pull-request-event';
import ReleaseEvent from './release-event';

export default {
	[IssueCommentEvent.type]: IssueCommentEvent,
	[IssueEvent.type]: IssueEvent,
	[PullRequestEvent.type]: PullRequestEvent,
	[ReleaseEvent.type]: ReleaseEvent,
};
