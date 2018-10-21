import styled from 'styled-components/macro';

export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2.5rem 0;
`;

export const ListItem = styled.div`
	padding: 1rem 2rem;
	width: 100%;
	max-width: 36rem;

	&:empty {
		display: none;
	}
`;

export const ListAction = styled(ListItem)`
	text-align: center;
`;
