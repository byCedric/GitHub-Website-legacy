import styled from 'styled-components/native';
import {
	border,
	BorderProps,
	color,
	ColorProps,
	compose,
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
	variant,
} from 'styled-system';

const flexVariants = variant({
	scale: 'layout',
	variants: { root: {} },
});

export const Flex = styled.View<FlexProps>`
	${flexVariants}
	${compose(
		border,
		color,
		flexbox,
		layout,
		shadow,
		space,
	)}
`;

export interface FlexProps extends BorderProps, ColorProps, FlexboxProps, LayoutProps, ShadowProps, SpaceProps {
	/** An optional variant or preset of the flex (box) */
	variant?: string;
}
