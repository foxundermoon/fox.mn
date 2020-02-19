import React, { PureComponent, FunctionComponent } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { Container, Paper } from '@material-ui/core'

interface Meta {
  title: string
}

export default (meta: Meta): FunctionComponent => ({ children }) => {
  return (
    <MDXProvider>
      <React.Fragment>
        <Head>
          <title>{meta.title} - fox.mn</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <main>
            <Container maxWidth="md">
              {children}
            </Container>
          </main>
        </ThemeProvider>
      </React.Fragment>
    </MDXProvider>
  )
}
