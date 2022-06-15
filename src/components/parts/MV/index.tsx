import Image from 'next/image';
import validateImage from 'lib/functions/validateImage';
import validateVideo from 'lib/functions/validareVideo';
import { useEffect, useState } from 'react';
import styles from './index.module.css'

interface Props {
  title: string
  text?: string
  src: string
}

const MV = ({title, text, src}: Props) => {
  let fileType = '';
  if(validateImage(src)) {
    fileType = 'image'
  } else if(validateVideo(src)) {
    fileType = 'video'
  }

  const titleSplit = title.split('\n')
  const titleHtmlSplit = titleSplit.map((title) => `<span>${title}</span>`)
  const titleHtml = titleHtmlSplit.join('<br>');

  return (
      <div className={`${styles.mv_container} relative`}>
        {fileType == 'image' && <Image src={src} width={1920} height={1080} />}
        {fileType == 'video' && <video src={src} autoPlay loop muted className={`md:h-screen object-cover object-center ${styles.mv_video}`}></video>}
        <div className="absolute top-1/4 left-6 md:left-12">
          {title && <h2 className={`relative text-2xl whitespace-pre-wrap text-base-color leading-loose md:text-3xl ${styles.mv_title}`} dangerouslySetInnerHTML={{__html: titleHtml}} />}
          {text && <div className={`relative pl-16 text-base-color ${styles.mv_text}`}>{text}</div>}
        </div>
      </div>
  )
}

export default MV;