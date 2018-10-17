import styled from 'styled-components';

/**
 * The user container creates a vertical-directed flexbox.
 * It also centers the content to connect the otherwise unrelated content visually.
 */
export const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #6a737d;
`;

/**
 * The user avatar aligns the user's avatar with the name, using flexbox.
 * This technique is also applied for the description to center the user's name correctly.
 */
export const UserAvatar = styled.div`
	display: flex;
	flex: 1;
	align-items: flex-end;
	padding: 0.5rem;
	font-size: 1.5em;
`;

/**
 * The user's name is also the title of the app and is therefore vertically centered.
 * It's positioned with flexbox to achieve this without knowing the sizes of both the avatar and description.
 */
export const UserName = styled.h1`
	flex: 0;
	margin: 0;
	padding: 0.5rem;
	text-align: center;
	line-height: 1.5;
	color: #24292e;
	font-size: 2em;
`;

/**
 * The user description aligns the user's description with the name, using flexbox.
 * Because of this flexbox positioning, the size of the text has no impact on the alignment.
 * This technique is also applied for the avatar to center the name correctly.
 */
export const UserDescription = styled.div`
	display: flex;
	flex: 1;
	align-items: flex-start;
	justify-content: center;
	margin: 0;
	padding: 0.5rem;
	width: 100%;
	max-width: 24em;
	text-align: center;
	line-height: 1.5;
`;

/**
 * The user description highlight styles a single word within this description.
 */
export const UserDescriptionHighlight = styled.strong`
	color: #24292e;
	font-weight: 600;
`;
