import ExpoDocument from '@expo/next-adapter/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class Document extends ExpoDocument {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => (
				originalRenderPage({
					enhanceApp: App => (
						props => sheet.collectStyles(<App {...props} />)
					),
				})
			);

			const initialProps = await ExpoDocument.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}

export default Document;
