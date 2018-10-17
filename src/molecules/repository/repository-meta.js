import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from 'antd';
import {
	RepositoryMeta,
	RepositoryMetaInfo,
} from './elements';

export default function RepositoryMoleculeMeta(props) {
	const formattedDate = props.updatedAt && moment(props.updatedAt)
		.format('DD-MM-YYYY');
	return (
		<RepositoryMeta>
			{props.language && (
				<RepositoryMetaInfo>
					<Icon type="code"></Icon>
					{props.language}
				</RepositoryMetaInfo>
			)}
			{props.stars && (
				<RepositoryMetaInfo>
					<Icon type="star"></Icon>
					{props.stars}
				</RepositoryMetaInfo>
			)}
			{props.forks > 0 && (
				<RepositoryMetaInfo>
					<Icon type="fork"></Icon>
					{props.forks}
				</RepositoryMetaInfo>
			)}
			{formattedDate && (
				<RepositoryMetaInfo>
					<Icon type="calendar"></Icon>
					Updated {formattedDate}
				</RepositoryMetaInfo>
			)}
		</RepositoryMeta>
	);
}

RepositoryMoleculeMeta.propTypes = {
	/** Amount of stars **/
	stars: PropTypes.number,
	/** Main language of the repository */
	language: PropTypes.string,
	/** Amount of forks */
	forks: PropTypes.number,
	/** Last updated at date */
	updatedAt: PropTypes.string,
};

RepositoryMoleculeMeta.defaultProps = {
	stars: 0,
	language: undefined,
	forks: 0,
	updatedAt: undefined,
};
