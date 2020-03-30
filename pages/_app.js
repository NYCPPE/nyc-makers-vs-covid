import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/index.css'
import GoogleSheetsProvider from 'react-db-google-sheets'

const mdComponents = {}

export default ({ Component, pageProps }) => {
  return (
    <GoogleSheetsProvider>
      <MDXProvider
        className="md:flex flex-col items-center w-full"
        components={mdComponents}
      >
        <Header />
        <Nav />
        <div className="markdown-body max-w-3xl pb-20 px-2 md:px-4 mx-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </MDXProvider>
    </GoogleSheetsProvider>
  )
}
