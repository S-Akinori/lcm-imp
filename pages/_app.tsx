import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import GoogleTagManager, { GoogleTagManagerId } from 'src/components/parts/GoogleTagManager'
import { googleTagManagerId } from 'lib/gtm'

interface VisitContext {
  visited: boolean
  setVisited: Dispatch<SetStateAction<boolean>> | null
}
export const visitContext = createContext<VisitContext>({
  visited: false,
  setVisited: () => {}
})

function MyApp({ Component, pageProps }: AppProps) {
  const [visited, setVisited] = useState(false)
  // useEffect(() => {
  //   const isVisited = localStorage.getItem('visited');
  //   if(isVisited === 'true') {
  //     setVisited(true)
  //   }
  // }, [])
  const router = useRouter()
  // useEffect(() => {
  //   if(process.env.NODE_ENV == 'production') {
  //     const handleRouteChange = (url: string) => {
  //       gtag.pageview(url)
  //     }
  //     router.events.on('routeChangeComplete', handleRouteChange)
  //     router.events.on('hashChangeComplete', handleRouteChange)
  //     return () => {
  //       router.events.off('routeChangeComplete', handleRouteChange)
  //       router.events.off('hashChangeComplete', handleRouteChange)
  //     }
  //   }
  // }, [router.events])
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* {process.env.NODE_ENV == 'production' && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )} */}
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <visitContext.Provider value={{visited: visited, setVisited: setVisited}}>
        <Component {...pageProps} />
      </visitContext.Provider>
    </>
  )
}

export default MyApp
