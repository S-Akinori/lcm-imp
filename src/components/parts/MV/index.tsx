import Image from 'next/image';
import validateImage from 'lib/functions/validateImage';
import validateVideo from 'lib/functions/validareVideo';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './index.module.css'
import { visitContext } from 'pages/_app';

interface Props {
  title: string
  text?: string
  src: string
  autoPlay?: boolean
  delay?: number
}

const MV = ({title, text, src, autoPlay = false, delay = 0}: Props) => {
  const {visited} = useContext(visitContext);
  const videoRef = useRef<HTMLVideoElement>(null)

  let fileType = '';
  if(validateImage(src)) {
    fileType = 'image'
  } else if(validateVideo(src)) {
    fileType = 'video'
  }

  const titleSplit = title.split('\n')
  useEffect(() => {
    if(videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play();
      }, delay)
    }
  }, []);

  return (
      <div className={`${styles.mv_container} relative`}>
        <style jsx>{`
          .growX::before {
            animation: growX 1s ease 1s both;
          }
          .delay::before {
            animation-delay: 3s;
          }
        `}</style>
        {fileType == 'image' && <Image src={src} width={1920} height={1080} />}
        {fileType == 'video' && <video ref={videoRef} src={src} autoPlay={autoPlay} loop muted className={`md:h-screen object-cover object-center ${styles.mv_video}`}></video>}
        <div className="absolute top-1/4 left-6 md:left-12">
          {titleSplit && (
            <h2 className={`relative text-2xl whitespace-pre-wrap text-base-color leading-loose md:text-3xl ${styles.mv_title}`}>
              {titleSplit.map((titleText, index) => (
                <span key={index} className={visited ? 'growX' : 'growX delay'}>{titleText}<br/></span>
              ))}
            </h2>
          )}
          {text && <div className={`relative pl-16 text-base-color ${styles.mv_text}`}>{text}</div>}
        </div>
      </div>
  )
}

export default MV;