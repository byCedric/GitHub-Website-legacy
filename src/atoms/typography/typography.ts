import { css } from 'styled-components/native';
import {
	color,
	ColorProps,
	compose,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	typography as baseTypography,
	TypographyProps as BaseTypographyProps,
	variant,
} from 'styled-system';

export const typographyStyle = css`
	color: inherit;
`;

export const typographyVariant = variant({
	scale: 'typography',
	variants: {
		heading: {},
		paragraph: {},
	},
});

export const typography = css`
	${compose(
		baseTypography,
		color,
		layout,
		space,
	)}
`;

export interface TypographyProps extends BaseTypographyProps, ColorProps, LayoutProps, SpaceProps {
	//
}
