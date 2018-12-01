import KeywordHighlight from './keyword';
import MentionHighlight from './mention';

export default {
	...KeywordHighlight.decorator,
	...MentionHighlight.decorator,
};
