import styled from 'styled-components/native';
import {
	typography,
	typographyStyle,
	typographyVariant,
	TypographyProps,
} from './typography';

export const Paragraph = styled.Text<ParagraphProps>`
	${typographyStyle}
	${typographyVariant}
	${typography}
`;

export interface ParagraphProps extends TypographyProps {
	/** The variant of the typography component (`paragraph` by default) */
	variant?: string;
}

Paragraph.defaultProps = {
	variant: 'paragraph',
};
