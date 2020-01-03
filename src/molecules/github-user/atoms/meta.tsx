import React from 'react';
import Head from 'next/head';

// todo:
// use proper keywords from bio
// use theme color from theme
// use og:url, twitter:site from current url

export const GithubMeta: React.FC<GithubMetaProps> = (props) => (
	<Head>
		<title>{props.name} ({props.login})</title>
		<meta name='description' content={props.bio} />
		<meta name='keywords' content={[props.login, props.name].join(', ')} />
		<meta name='theme-color' content='#000000' />
		<meta property='og:type' content='profile' />
		<meta property='og:url' content='https://bycedric.com' />
		<meta property='og:title' content={`${props.name} (${props.login})`} />
		<meta property='og:description' content={props.bio} />
		<meta property='og:image' content={`https://github.com/${props.login}.png?size=240`} />
		<meta property='og:image:width' content='240' />
		<meta property='og:image:height' content='240' />
		<meta property='og:image:type' content='image/png' />
		<meta property='profile:username' content={props.login} />
		<meta property='twitter:card' content='summary' />
		<meta property='twitter:site' content='https://bycedric.com' />
	</Head>
);

export interface GithubMetaProps {
	name: string;
	bio: string;
	login: string;
}
