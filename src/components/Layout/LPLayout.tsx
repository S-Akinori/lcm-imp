import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import {gnav} from "../../contents/nav"
import LPHeader from "./Header/LPHeader"
import LPFooter from "./Footer/LPFooter"

interface Props {
  children: React.ReactNode
  pageTitle?: string,
  pageDescription?: string
  pagePath?: string
  pageImg?: string
  h1?: string
  headerButton: {
    href: string
    text: string
  }
}

const LPLayout = ({
    pageTitle = process.env.NEXT_PUBLIC_SITE_NAME, 
    pageDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    pagePath = process.env.NEXT_PUBLIC_HOME_URL, 
    pageImg = process.env.NEXT_PUBLIC_HOME_URL + '/images/concept.jpg', 
    h1 = process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    children,
    headerButton
  }: Props) => {
  return (
    <div style={{overflowX: 'hidden'}}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
        {process.env.NODE_ENV !== 'production' && <meta name="robots" content="noindex, nofollow" />}
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pagePath} />
        <meta property="og:image" content={pageImg} />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:locale" content="ja_JP"  />
      </Head>
      <LPHeader button={headerButton} />
      <main>
        {h1 && <h1 className="hidden">{h1}</h1>}
        <div>
          {children}
        </div>
      </main>
      <LPFooter />
    </div>
  )
}

export default LPLayout