import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/index.css'

const mdComponents = {}

export default ({ Component, pageProps }) => (
  <MDXProvider
    className="md:flex flex-col items-center w-full"
    components={mdComponents}
  >
    <Nav />
    <div className="max-w-4xl pb-20 px-8 mx-auto">
      <Component {...pageProps} />
    </div>
    <Footer />
  </MDXProvider>
)
