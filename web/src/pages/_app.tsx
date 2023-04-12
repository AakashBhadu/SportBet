import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TopLayout } from '../components/Layouts/TopLayout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  let getLayout = Component.getLayout ?? DefaultLayout;

  return getLayout(<Component {...pageProps} />);
}

function DefaultLayout(Component: ReactElement) {
  return (
    <TopLayout>
      {Component}
    </TopLayout>
  )
}

export default MyApp
