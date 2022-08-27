import Image from "next/image"
import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  src?: string
  image: {
    src: string
    width: number
    height: number
  }
  children: ReactNode
  rtl?: boolean
}

const TextAndImageOver = ({src, children, image, rtl = false, className = '', style}: Props) => {
  const direction = rtl ? 'rtl md:flex-row-reverse' : 'md:flex-row';
  return (
    <>
      <style jsx>{`
        .text {
          padding: 2rem 1.5rem;
        }
        .text::before {
          content: '';
          display: block;
          position: absolute;
          top: 2rem;
          left: 0rem;
          z-index: 1;
          background: var(--base-background);
          width: 120%;
          height: 100%;
        }
        .rtl .text::before {
          left: auto;
          right: 0rem;
        }
        .player-wrapper {
          height: 28vw;
        }
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
        @media(max-width: 768px) {
          .text::before {
            top: 0;
            left: 0;
            width: 100%;
          }
          .rtl .text::before {
            left: auto;
            right: 0;
          }
          .player-wrapper {
            height: 56.25vw;
          }
        }
      `}</style>
      <div className={`flex flex-col-reverse ${className} ${direction}`} style={style}>
        <div className="relative z-10 md:w-1/2 text">
          <div className="relative md:top-8 z-10">{children}</div>
        </div>
        <div className="md:w-1/2 relative z-20" style={{fontSize: 0}}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  )
}

export default TextAndImageOver