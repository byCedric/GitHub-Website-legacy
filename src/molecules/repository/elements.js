import styled from 'styled-components';
import { Card } from 'antd';
/**
 * The user container creates a vertical-directed flexbox.
 * It also centers the content to connect the otherwise unrelated content visually.
 */
export const RepositoryCard = styled(Card)`
`;

export const RepositoryMeta = styled.div`
	display: flex;
	margin-top: 0.5rem;
	> div {
		margin-right: 0.5rem;
	}
`;

export const RepositoryMetaInfo = styled.div`
	> i {
		margin-right: 0.25rem;
	}
`;



export const RepositoryCardContent = styled.div`
    min-height: 3rem;
`;
