import styled from 'styled-components/native';
import {
	typography,
	typographyStyle,
	typographyVariant,
	TypographyProps,
} from './typography';

export const Heading = styled.Text<HeadingProps>`
	${typographyStyle}
	${typographyVariant}
	${typography}
`;

export interface HeadingProps extends TypographyProps {
	/** The variant of the typography component (`heading` by default) */
	variant?: string;
}

Heading.defaultProps = {
	variant: 'heading',
};
