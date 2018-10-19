import styled from 'styled-components/macro';

export const EventContainer = styled.a`
	display: block;
	margin: 1.5rem;
	border-radius: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background: #fff;
	padding: 1rem;
	text-decoration: none;
	color: #6a737d;

	&:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}
`;

export const EventHeader = styled.div`
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.6em;
	font-weight: 500;
`;

export const EventTitle = styled.h3`
	margin: 0.5rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #24292e;
`;

export const EventDescription = styled.div`
	overflow: hidden;
	text-transform: lowercase;
	text-overflow: ellipsis;
	line-height: 1.5;
	white-space: nowrap;
	font-size: 0.75em;
`;
