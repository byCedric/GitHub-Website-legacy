import React from 'react';
import PropTypes from 'prop-types';
import activities from './activities';

export default function GithubEventsOrganismActivity(props) {
	const Component = activities[props.type];

	return Component
		? <Component {...props} />
		: null;
}

GithubEventsOrganismActivity.propTypes = {
	type: PropTypes.string.isRequired,
	repo: PropTypes.object.isRequired,
	payload: PropTypes.object.isRequired,
};
