import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import {
	RepositoryCard,
	RepositoryCardContent,
} from './elements';

import RepositoryMeta from './repository-meta';

export default function RepositoryMolecule(props) {
	return (
		<RepositoryCard
			onClick={() => {
				return props.url ? window.open(props.url, '_blank') : null;
			}}
			title={props.fullName}
			hoverable
			extra={(
				<Icon type="github"></Icon>
			)}
		>
			<RepositoryCardContent>
				{props.description}
			</RepositoryCardContent>
			<RepositoryMeta
				language={props.language}
				stars={props.stars}
				forks={props.forks}
				updatedAt={props.updatedAt}
			/>
		</RepositoryCard>
	);
}

RepositoryMolecule.propTypes = {
	/** The full name of the repository that is displayed. */
	fullName: PropTypes.string.isRequired,
	/** A description of this repository. */
	description: PropTypes.string,
	/** Stars this project received */
	stars: PropTypes.number,
	/** Language this project is written in */
	language: PropTypes.string,
	/** Amount of forks */
	forks: PropTypes.number,
	/** Last updated at date */
	updatedAt: PropTypes.string,
	/** Link to repository */
	url: PropTypes.string,
};

RepositoryMolecule.defaultProps = {
	description: '',
	stars: 0,
	language: '',
	url: undefined,
};
