import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './elements';

export default function ButtonAtom(props) {
	return (
		<Button onClick={props.onClick}>
			{props.children}
		</Button>
	);
}

ButtonAtom.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
}
