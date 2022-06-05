import Image from "next/image"
import { ReactNode } from "react"

interface Props {
  src: string
  alt?: string
  rtl?: boolean
  width?: number
  height?: number
  col?: number
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

const TextAndImage = ({src, alt, children, rtl = false, width = 600, height = 400, col, className = '', style}: Props) => {
  const direction = rtl ? 'rtl md:flex-row-reverse' : 'md:flex-row';
  const colWidth = col ? `md:w-1/${col}` : ''
  return (
      <div className={`md:flex ${direction} ${className}`} style={style}>
        <div className={`p-4 mb-12 md:mb-0 ${colWidth}`}>{children}</div>
        <div className={`p-4 ${colWidth}`}>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
      </div>
  )
}

export default TextAndImage