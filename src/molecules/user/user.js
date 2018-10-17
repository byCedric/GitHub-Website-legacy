import React from 'react';
import Avatar from 'src/atoms/avatar';
import { propTypes, defaultProps } from './prop-type';
import UserMeta from './user-meta';
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
			<UserMeta {...props} />
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

UserMolecule.propTypes = propTypes;
UserMolecule.defaultProps = defaultProps;
