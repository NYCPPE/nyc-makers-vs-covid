import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Banner from '../components/banner'
import '../styles/index.css'
import { ModalProvider } from 'react-modal-hook'
import { withRouter } from 'next/router'

const mdComponents = {}

export default ({ Component, pageProps, router, ...rest }) => {
  console.log(router.pathname)
  return (
    <ModalProvider>
      <MDXProvider
        className="md:flex flex-col items-center w-full"
        components={mdComponents}
      >
        <Banner />
        <Header />

        {router.pathname === '/' ? (
          <>
            <Nav home={true} />
            <div className="markdown-body">
              <Component {...pageProps} />
            </div>
          </>
        ) : (
          <>
            <Nav home={false} />
            <div className="markdown-body max-w-3xl pb-20 px-2 md:px-4 mx-auto">
              <Component {...pageProps} />
            </div>
          </>
        )}
        <Footer />
      </MDXProvider>
    </ModalProvider>
  )
}
