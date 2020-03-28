import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/index.css'

const Info = ({ children }) => {
  return <div className="custom-block info">{children}</div>
}

const Alert = ({ children }) => {
  return <div className="custom-block alert">{children}</div>
}

const Warning = ({ children }) => {
  return <div className="custom-block warning">{children}</div>
}

const mdComponents = {}

export default ({ Component, pageProps }) => {
  console.log(pageProps)
  return (
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
  )
}
