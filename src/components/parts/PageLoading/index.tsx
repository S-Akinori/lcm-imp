import clsx from 'clsx';
import Image from 'next/image';
import { visitContext } from 'pages/_app';
import { AnimationEventHandler, TransitionEventHandler, useContext, useEffect, useState } from 'react'
import styles from './index.module.css'

const PageLoading = () => {
  const [show, setShow] = useState(true)
  const [textAnimClass, setTextAnimClass] = useState('');
  const {visited, setVisited} = useContext(visitContext);
  
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
      localStorage.setItem('visited', 'true');
      if(setVisited) setVisited(true)
    }, 3000)
    setTextAnimClass(styles.active)
  }, [])

  return (
    <>
      {show && !visited && (
        <div className="fixed top-0 left-0 z-50 w-full h-full">
          <div className={`${styles.backgroundAnim} ${styles.backgroundAnimTop}`}></div>
          <div className={`${styles.backgroundAnim} ${styles.backgroundAnimBottom}`}></div>
          <div className={`${styles.text} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl ${textAnimClass}`} style={{fontFamily: 'Cookie'}}>Ring Ring</div>
          <div className={styles.borderAnim}></div>
        </div>
      )}
    </>
  )
}

export const PageLoadingWithImages = () => {
  const [show, setShow] = useState(true)
  const [state, setState] = useState(-1)
  const {visited, setVisited} = useContext(visitContext);
  const images = [
    '/images/image-loading1.JPG',
    '/images/image-loading2.jpg',
    '/images/image-loading3.jpg',
    '/images/image-loading4.JPG',
  ]
  const imageDelay = 450;

  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 300);
  }, [])

  useEffect(() => {
    if(state == 2) {
      setTimeout(() => {
        setShow(false)
      }, 700);
    }
  }, [state])
  const imageClasses = [
    'top-1/4 right-0 md:top-0 md:left-1/2 md:-translate-x-1/2',
    'bottom-1/4 right-0 md:top-1/2 md:right-0 md:-translate-y-1/2',
    'bottom-1/4 left-0 md:bottom-0 md:left-1/2 md:-translate-x-1/2',
    'top-1/4 left-0 md:top-1/2 md:left-0 md:-translate-y-1/2',
  ]
  
  const onTransitionEnd : TransitionEventHandler<HTMLDivElement> = () => {
    setState(1)
    console.log('imageAnim')
  }
  const onAnimationEnd : AnimationEventHandler<SVGCircleElement> = () => {
      setState(2)
      console.log('done')
      localStorage.setItem('visited', 'true');
      if(setVisited) setVisited(true)
  }

  return (
    <>
      <style jsx>{`
        svg {
          height: 80%;
          display: block;
          margin: auto;
          transform: rotate(-90deg);
        }
        circle {
          opacity: 0;
          stroke-dasharray: 600;
        }
        circle.animation {
          opacity: 1;
          animation: circle ease 5s;
        }
        @keyframes circle {
          to {
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          }
          from {
            stroke-dashoffset: 600;
            stroke-opacity: 0.3;
          }
        }
      `}</style>
      {show && !visited && (
        <div className="fixed top-0 left-0 z-50 w-full h-full">
          <div className={clsx(['absolute top-0 left-0 bg-main w-full duration-700', state >= 2 ? 'h-0' : 'h-full'])}></div>
          <div className={clsx(['w-full h-full', state >= 2 ? 'hidden' : ''])}>
            <div className='absolute z-10 flex items-center justify-center h-full w-full'>
              <svg viewBox="0, 0, 200, 200" xmlns="http://www.w3.org/2000/svg">
                <circle onAnimationEnd={onAnimationEnd} className={state >= 1 ? 'animation' : ''} cx="100" cy="100" r="90" stroke="#A69463" fill="none" />
              </svg>
            </div>
            <div className='relative z-10 w-full h-full'>
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={clsx(['md:m-6 absolute duration-500 aspect-video w-1/2 md:w-1/3', imageClasses[index], state >= 1 ? 'opacity-100' : 'opacity-0'])}
                  style={{transitionDelay: `${imageDelay * (index + 1)}ms`}}
                ><img src={image} alt="Ring Ring" /></div>
              ))}
            </div>
            <div onTransitionEnd={onTransitionEnd} className={clsx(['absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300', state >= 0 ? 'opacity-100' : 'opacity-0'])}>
              <img className='rounded-full' src='/images/logo.png' width={200} height={200} alt="Ring Ring" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PageLoading