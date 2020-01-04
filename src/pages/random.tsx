import { NextPage } from 'next';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { alias } = require('../../now.json');

const RandomDomainPage: NextPage = () => null;

RandomDomainPage.getInitialProps = async (ctx) => {
	const domain = alias[Math.floor(Math.random() * alias.length)];

	ctx.res.writeHead(302, { Location: `https://${domain}` });
	ctx.res.end();
};

export default RandomDomainPage;
