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
  return (
    <>
      {process.env.NODE_ENV == 'production' && (
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      )}
      <visitContext.Provider value={{visited: visited, setVisited: setVisited}}>
        <Component {...pageProps} />
      </visitContext.Provider>
    </>
  )
}

export default MyApp
