import { NextApiRequest, NextApiResponse } from 'next';
import { alias } from '../../../now.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const domain = alias[Math.floor(Math.random() * alias.length)];

	res.writeHead(302, { Location: `https://${domain}` });
	res.end();
};
