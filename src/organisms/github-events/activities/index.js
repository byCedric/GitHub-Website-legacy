import IssueCommentEvent from './issue-comment-event';
import PullRequestEvent from './pull-request-event';

export default {
	[IssueCommentEvent.type]: IssueCommentEvent,
	[PullRequestEvent.type]: PullRequestEvent,
};
