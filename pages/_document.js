import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const cssReset = `
  * {
    box-sizing: border-box;
  }

  html, body, h1 {
    margin: 0;
    font-family: Monaco, monospace;
  }

  h1 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, pathname, asPath }) {
    console.log('pathname', pathname)
    console.log('asPath', asPath)
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>design-lab</title>
          <style>{cssReset}</style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
