import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function TimeAtom(props) {
	const timestamp = moment(props.timestamp);
	const formatted = timestamp.format(props.format);

	return (
		<time dateTime={props.timestamp} title={formatted}>
			{props.relative ? timestamp.fromNow() : formatted}
		</time>
	);
}

TimeAtom.propTypes = {
	timestamp: PropTypes.string.isRequired,
	format: PropTypes.string,
	relative: PropTypes.bool,
};

TimeAtom.defaultProps = {
	format: 'MMMM DD Y, HH:mm',
	relative: false,
};
