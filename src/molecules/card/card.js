import React from 'react';
import PropTypes from 'prop-types';
import Time from 'src/atoms/time';
import {
	CardContainer,
	CardHeader,
	CardHeaderContent,
	CardHeaderTime,
	CardTitle,
	CardContent,
} from './elements';

export default function CardAtom(props) {
	const header = [props.action, props.repository]
		.filter(value => !!value)
		.join(' — ')

	return (
		<CardContainer
			title={props.description}
			href={props.link}
			target='_blank'
			rel='noopener noreferrer'
		>
			<CardHeader>
				<CardHeaderContent>{header}</CardHeaderContent>
				<CardHeaderTime>
					<Time timestamp={props.timestamp} relative />
				</CardHeaderTime>
			</CardHeader>
			<CardTitle>{props.title}</CardTitle>
			{!!props.children && <CardContent>{props.children}</CardContent>}
		</CardContainer>
	);
}

CardAtom.propTypes = {
	action: PropTypes.string,
	repository: PropTypes.string,
	timestamp: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	link: PropTypes.string,
};
