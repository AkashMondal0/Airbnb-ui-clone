import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'
import Model from '../components/modals/modal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      {/* <Model isOpen={true}/> */}
      <Component {...pageProps} />
    </Fragment>
  )
}