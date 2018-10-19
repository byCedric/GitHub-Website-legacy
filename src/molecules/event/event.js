import React from 'react';
import PropTypes from 'prop-types'
import Time from 'src/atoms/time';
import {
	EventContainer,
	EventHeader,
	EventDescription,
	EventTitle,
} from './elements';

export default function EventMolecule(props) {
	const description = [props.repository, props.description]
		.filter(value => !!value)
		.join(' — ');

	return (
		<EventContainer href={props.url} target="_blank" title={props.title}>
			<EventHeader>{props.type} — <Time timestamp={props.timestamp} relative /></EventHeader>
			<EventTitle>{props.title}</EventTitle>
			<EventDescription>{description}</EventDescription>
		</EventContainer>
	);
}

EventMolecule.propTypes = {
	type: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string,
	repository: PropTypes.string,
};

PropTypes.defaultTypes = {
	description: '',
	repository: '',
};
