import React from 'react';
import PropTypes from 'prop-types';
import decorator, { Decorators } from './decorator';
import { HighlightContainer } from './elements';

interface Props {
	/** The text to highlight with the decorators. */
	children: string;
	/** All decorators with their starting character. */
	decorators: Decorators;
}

export default function HighlightAtom(props: Props) {
	return (
		<HighlightContainer>
			{decorator(props.children, props.decorators)}
		</HighlightContainer>
	);
}
