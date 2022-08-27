import Image from "next/image"

interface Props {
  children: React.ReactNode
  src: string
  alt?: string
}

const SpeechBalloonWithImage = ({children, src, alt}: Props) => {
  return (
    <>
      <style jsx>{`
        .balloon::before {
          content: '';
          display: block;
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 20px;
          height: 20px;
          border-top: 1px solid var(--accent-color);
          border-left: 1px solid var(--accent-color);
          background: linear-gradient(to bottom right, #FFF 0%, #FFF 50%, transparent 50.5%);
        }
        .balloon::after {
          content: '';
          display: block;
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: -1;
          width: 100%;
          height: 100%;
          background: var(--main-color)
        }
      `}</style>
      <div>
        <div className="mb-4">
          <Image
            src={src}
            alt={alt}
            width={600}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="balloon p-4 pr-2 relative border border-accent">
          {children}
        </div>
      </div>
    </>
  )
}

export default SpeechBalloonWithImage