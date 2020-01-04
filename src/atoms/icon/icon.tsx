import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { typography, TypographyProps } from 'src/atoms/typography';

const IconSet: React.FC<IconProps> = MaterialCommunityIcons as any;

export const Icon = styled(IconSet)`
	${typography}
`;

export interface IconProps extends TypographyProps {
	name: string;
}

Icon.defaultProps = {
	fontSize: 5,
};
