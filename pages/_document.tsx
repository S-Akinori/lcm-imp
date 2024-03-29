import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document';
import React from 'react';
import {googleTagManagerId} from 'lib/gtm';

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render(): JSX.Element {
    return (
      <Html prefix="og: https://ogp.me/ns#">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}