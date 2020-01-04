import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		res.status(301);
		res.setHeader('Location', '/');
		return res.end();
	}

	// todo: handle request errors

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		body: JSON.stringify(req.body),
		headers: {
			Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
			'Content-Type': 'application/json',
		},
	});

	const json = await response.json();

	res.status(response.status);
	res.json(json);
};
