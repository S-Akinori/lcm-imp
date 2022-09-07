import { visitContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react'
import styles from './index.module.css'

const PageLoading = () => {
  const [show, setShow] = useState(true)
  const {visited, setVisited} = useContext(visitContext);
  
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
      localStorage.setItem('visited', 'true');
      if(setVisited) setVisited(true)
    }, 3000)
  }, [])
  return (
    <>
      {show && !visited && (
        <div className="fixed top-0 left-0 z-50 w-full h-full">
          <div className={`${styles.backgroundAnim} ${styles.backgroundAnimTop}`}></div>
          <div className={`${styles.backgroundAnim} ${styles.backgroundAnimBottom}`}></div>
          <div className={`${styles.text} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl`}>RING RING</div>
          <div className={styles.borderAnim}></div>
        </div>
      )}
    </>
  )
}

export default PageLoading