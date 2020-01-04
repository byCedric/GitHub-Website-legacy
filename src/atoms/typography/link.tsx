import React, { useRef } from 'react';
import { useHover } from 'react-native-web-hooks';
import { Paragraph } from './paragraph';
import { TypographyProps } from './typography';

export const Link: React.FC<LinkProps> = (props) => {
	const ref = useRef();
	const { isHovered } = useHover(ref);

	return (
		<Paragraph
			ref={ref}
			{...props}
			accessibilityRole='link'
			variant={getVariant(props, isHovered)}
		>
			{props.children}
		</Paragraph>
	);
};

export interface LinkProps extends TypographyProps {
	/** The variant of the typography component (`link` by default) */
	variant?: string;
	/** The variant when the user hovers this component (`links.hover` by default) */
	variantHover?: string;
	/** The URL to open */
	href?: string;
	/** Where the URL needs to open */
	target?: '_blank' | '_self';
}

Link.defaultProps = {
	variant: 'link',
	variantHover: 'links.hover',
};

function getVariant(props: LinkProps, isHovered: boolean) {
	if (isHovered) {
		return props.variantHover || props.variant;
	}

	return props.variant;
}
