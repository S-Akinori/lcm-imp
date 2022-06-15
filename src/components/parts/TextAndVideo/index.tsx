import dynamic from "next/dynamic"
import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  src: string
  children: ReactNode
  rtl?: boolean
}

const TextAndVideo = ({src, children, rtl = false, className = '', style}: Props) => {
  const direction = rtl ? 'rtl md:flex-row-reverse' : 'md:flex-row';
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <>
      <style jsx>{`
        .text {
          padding: 1rem 1.5rem;
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
        <div className="player-wrapper relative md:w-1/2 z-20">
          <ReactPlayer
            width="100%"
            height="100%"
            url={src}
          />
        </div>
      </div>
    </>
  )
}

export default TextAndVideo