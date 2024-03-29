// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react/display-name */
// import { ReactElement } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// export default class CustomDocument extends Document<{
//   styleTags: ReactElement[];
// }> {
//   static getInitialProps({ renderPage }: any) {
//     const sheet = new ServerStyleSheet();

//     const page = renderPage(
//       (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
//     );

//     const styleTags = sheet.getStyleElement();

//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <Html>
//         <Head>{this.props.styleTags}</Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
