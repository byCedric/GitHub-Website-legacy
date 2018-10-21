import styled from 'styled-components/macro';

export const CardContainer = styled.a`
	display: block;
	border-radius: 0.5rem;
	box-shadow: 0 12px 16px -8px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	text-decoration: none;
	color: #6a737d;
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem 1rem 0 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.625em;
	font-weight: 500;
`;

export const CardHeaderContent = styled.div`
	flex: 1;
	padding-right: 1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const CardHeaderTime = styled.div`
	flex: 0 0 auto;
`;

export const CardTitle = styled.h3`
	margin: 0;
	padding: 0.5rem 1rem 1rem 1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.25;
	white-space: nowrap;
	color: #24292e;
`;

export const CardContent = styled.div`
	padding: 0 1rem 1rem 1rem;
	line-height: 1.5;
	white-space: pre;
	font-size: 0.875em;
`;
