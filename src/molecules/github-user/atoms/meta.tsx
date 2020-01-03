import React from 'react';
import Head from 'next/head';
import { useThemeProp } from 'src/providers/theme';

export const GithubMeta: React.FC<GithubMetaProps> = (props) => {
	const color = useThemeProp('layout.root.backgroundColor', 'colors');
	const keywords = [props.login, props.name, ...getKeywordsFromBio(props.bio)];

	return (
		<Head>
			<title>{props.name} ({props.login})</title>
			<meta name='description' content={props.bio} />
			<meta name='keywords' content={keywords.join(', ')} />
			<meta name='theme-color' content={color || '#000000'} />
			<meta property='og:type' content='profile' />
			<meta property='og:url' content={`https://${props.host}`} />
			<meta property='og:title' content={`${props.name} (${props.login})`} />
			<meta property='og:description' content={props.bio} />
			<meta property='og:image' content={`https://github.com/${props.login}.png?size=240`} />
			<meta property='og:image:width' content='240' />
			<meta property='og:image:height' content='240' />
			<meta property='og:image:type' content='image/png' />
			<meta property='profile:username' content={props.login} />
			<meta property='twitter:card' content='summary' />
			<meta property='twitter:site' content={`https://${props.host}`} />
		</Head>
	);
};

export interface GithubMetaProps {
	host: string;
	name: string;
	bio: string;
	login: string;
}

function getKeywordsFromBio(bio = '') {
	const keywords = bio.match(/\B[@#]\w+/ig) || [];
	return keywords.map(keyword => keyword.substr(1));
}
