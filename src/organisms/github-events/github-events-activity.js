import React from 'react';
import PropTypes from 'prop-types';
import activities from './activities';

export default function GithubEventsOrganismType(props) {
	const Component = activities[props.type];

	return Component
		? <Component {...props} />
		: null;
}

GithubEventsOrganismType.propTypes = {
	type: PropTypes.string.isRequired,
	repo: PropTypes.object.isRequired,
	payload: PropTypes.object.isRequired,
};
