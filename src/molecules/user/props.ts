import { Decorators } from 'src/atoms/highlight';

export interface Props {
	/** The full name of the person who is displayed. */
	name: string;
	/** The username of the person who is displayed. */
	username: string;
	/** The absolute URL of the person's avatar.  */
	avatarUrl: string;
	/** An optional description of this person. */
	description?: string;
	/** An optional object with all decorators for user's description highlights. */
	highlights?: Decorators;
}

export const defaultProps = {
	description: '',
	highlights: {},
};
