import Image from 'next/image';
import validateImage from 'lib/functions/validateImage';
import validateVideo from 'lib/functions/validareVideo';
import ActionButton from 'src/components/parts/Button/ActionButton';

interface Props {
  src: string
  children: React.ReactNode;
}

const LPFV = ({src, children}: Props) => {
  let fileType = '';
  if(validateImage(src)) {
    fileType = 'image'
  } else if(validateVideo(src)) {
    fileType = 'video'
  }

  return (
    <>
      <style jsx>{`
        .fv-container {
          position: relative;
          height: 80vh;
          overflow: hidden;
        }
        .fv-container::before {
          content: '';
          display: block;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--base-text-color);
          opacity: 0.4;
        }
      `}</style>
      <div className="fv-container">
        <div className="text-center">
          {fileType == 'image' && <Image src={src} layout="fill" objectFit='cover' objectPosition="center center" />}
          {fileType == 'video' && <video src={src} autoPlay loop muted className={`md:h-screen object-cover object-center`}></video>}
        </div>
        <div className="absolute p-6 md:left-8 top-1/2 -translate-y-1/2 z-10 ">
          {children}
        </div>
      </div>
    </>
  )
}

export default LPFV;