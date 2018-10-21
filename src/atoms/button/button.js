import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './elements';

export default function ButtonAtom(props) {
	return (
		<Button {...props}>
			{props.children}
		</Button>
	);
}

ButtonAtom.propTypes = {
	children: PropTypes.string,
}
