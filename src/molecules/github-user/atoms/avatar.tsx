import React from 'react';
import { Image } from 'react-native';
import { Box, BoxProps } from 'src/atoms/layout';

export const GithubAvatar: React.FC<AvatarProps> = (props) => (
	<Box
		as={Image as any}
		variant='avatar'
		source={{ uri: `https://github.com/${props.login}.png` }}
		{...props}
	/>
);

export interface AvatarProps extends BoxProps {
	login: string;
}
