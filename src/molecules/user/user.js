import React from 'react';
import Avatar from 'src/atoms/avatar';
import Highlight from 'src/atoms/highlight';
import { propTypes, defaultProps } from './prop-type';
import UserMeta from './user-meta';
import {
	UserContainer,
	UserContainerMeta,
	UserContainerInfo,
	UserAvatar,
	UserName,
	UserDescription,
} from './elements';

export default function UserMolecule(props) {
	const identifier = `${props.name} (${props.username})`;

	return (
		<UserContainer>
			<UserContainerMeta>
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
			</UserContainerMeta>
			<UserContainerInfo>
				<UserDescription>
					<Highlight decorators={props.highlights}>
						{props.description}
					</Highlight>
				</UserDescription>
			</UserContainerInfo>
		</UserContainer>
	);
}

UserMolecule.propTypes = propTypes;
UserMolecule.defaultProps = defaultProps;
