import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Cat from '../components/cat.svg'

import Cat2 from '../components/Cat'
import './style.scss'

const Home = () => (
  <div>
    <Head>
      <title>fox land site</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="content">
      <div className="container">
        <Cat2 />
      </div>

     
    </div>
  </div>
)

export default Home
