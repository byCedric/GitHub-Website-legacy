import styled from 'styled-components/native';
import {
	border,
	BorderProps,
	color,
	ColorProps,
	compose,
	layout,
	LayoutProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
	variant,
} from 'styled-system';

const boxVariants = variant({
	scale: 'layout',
	variants: { root: {} },
});

export const Box = styled.View<BoxProps>`
	${boxVariants}
	${compose(
		border,
		color,
		layout,
		shadow,
		space,
	)}
`;

export interface BoxProps extends BorderProps, ColorProps, LayoutProps, ShadowProps, SpaceProps {
	/** An optional variant or preset of the box */
	variant?: string;
}
