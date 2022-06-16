import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

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
  useEffect(() => {
    const isVisited = localStorage.getItem('visited');
    if(isVisited === 'true') {
      setVisited(true)
    }
  }, [])
  return (
    <visitContext.Provider value={{visited: visited, setVisited: setVisited}}>
      <Component {...pageProps} />
    </visitContext.Provider>
  )
}

export default MyApp
