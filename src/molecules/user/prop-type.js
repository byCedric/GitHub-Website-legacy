import PropTypes from 'prop-types';

export const propTypes = {
	/** The full name of the person who is displayed. */
	name: PropTypes.string.isRequired,
	/** The username of the person who is displayed. */
	username: PropTypes.string.isRequired,
	/** The absolute URL of the person's avatar.  */
	avatarUrl: PropTypes.string.isRequired,
	/** An optional description of this person. */
	description: PropTypes.string,
};

export const defaultProps = {
	description: '',
};
