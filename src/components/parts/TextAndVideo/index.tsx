import dynamic from "next/dynamic"
import { ReactNode } from "react"
// import ReactPlayer from "react-player"

interface Props {
  src: string
  children: ReactNode
  rtl?: boolean
}

const TextAndVideo = ({src, children, rtl = false}: Props) => {
  const direction = rtl ? 'rtl md:flex-row-reverse' : 'md:flex-row';
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <>
      <style jsx>{`
        .text::before {
          content: '';
          display: block;
          position: absolute;
          top: 2rem;
          left: 2rem;
          z-index: 1;
          background: var(--base-background);
          width: 120%;
          height: 100%;
        }
        .rtl .text::before {
          left: auto;
          right: 2rem
        }
        @media(max-width: 768px) {
          .text::before {
            top: 0;
            left: 0;
          }
          .rtl .text::before {
            left: auto;
            right: 0;
          }
        }
      `}</style>
      <div className={`flex flex-col-reverse ${direction}`} style={{padding: "4.5rem 0"}}>
        <div className="relative z-10 p-8 md:p-16 mb-8 md:mb-0 md:w-1/2 text">
          <div className="relative z-10">{children}</div>
        </div>
        <div className="relative z-20 h-80 md:w-1/2">
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