import { NextPage } from 'next';
import { alias } from '../../now.json';

const RandomDomainPage: NextPage = () => null;

RandomDomainPage.getInitialProps = async (ctx) => {
	const domain = alias[Math.floor(Math.random() * alias.length)];

	ctx.res.writeHead(302, { Location: `https://${domain}` });
	ctx.res.end();
};

export default RandomDomainPage;
