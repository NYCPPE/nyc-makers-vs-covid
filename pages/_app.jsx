import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Banner from '../components/banner'
import '../styles/index.css'

const mdComponents = {}

export default ({ Component, pageProps }) => {
  return (
    <MDXProvider
      className="md:flex flex-col items-center w-full"
      components={mdComponents}
    >
      <Header />
      <Nav />
      <Banner />
      <div className="markdown-body max-w-3xl pb-20 px-2 md:px-4 mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </MDXProvider>
  )
}
