import React from 'react'
import TopBar from './TopBar'
import Head from 'next/head';

const pages = [
  {
    name: 'Main',
    url: '/'
  },
  {
    name: 'Shop',
    url: '/shop'
  },
  {
    name: 'About',
    url: '/about'
  }
]
export const MainContainer = ({ children, title, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'Peter, js app shop' + keywords} />
        <title>{title}</title>
      </Head>
      <TopBar pages={pages}/>
      <div>
        {children}
      </div>
    </>
  )
}