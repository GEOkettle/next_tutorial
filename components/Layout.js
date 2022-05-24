import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
      <>
             <Head>
              <title>next.js_tutorial</title>
              <meta keyword="my keyword"/>
              <meta contents="my contents"/>
        </Head>
          <Nav/>
    <div>
              {children}          
    </div>
    </>
  )
}

export default Layout