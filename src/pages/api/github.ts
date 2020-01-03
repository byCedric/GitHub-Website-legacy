import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';
import { githubToken } from 'src/providers/config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		res.status(301);
		res.setHeader('Location', '/');
		return res.end();
	}

	const options: fetch.IsomorphicRequest = {
		method: 'POST',
		body: JSON.stringify(req.body),
		headers: {
			Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
			'Content-Type': 'application/json',
		},
	};

	const response = await fetch('https://api.github.com/graphql', options);
	const json = await response.json();

	res.status(response.status);
	res.json(json);
};
