import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'src/atoms/avatar';

import {
	UserContainer,
	UserAvatar,
	UserName,
	UserDescription,
} from './elements';

export default function UserMolecule(props) {
	const identifier = `${props.name} (${props.username})`;

	return (
		<UserContainer>
			<UserAvatar>
				<Avatar
					url={props.avatarUrl}
					name={identifier}
					title={identifier}
				/>
			</UserAvatar>
			<UserName title={identifier}>
				{props.name}
			</UserName>
			<UserDescription>
				{props.description}
			</UserDescription>
		</UserContainer>
	);
}

UserMolecule.propTypes = {
	/** The full name of the person who is displayed. */
	name: PropTypes.string.isRequired,
	/** The username of the person who is displayed. */
	username: PropTypes.string.isRequired,
	/** The absolute URL of the person's avatar.  */
	avatarUrl: PropTypes.string.isRequired,
	/** An optional description of this person. */
	description: PropTypes.string,
};

UserMolecule.defaultProps = {
	description: '',
};
