import Image from "next/image"
import { ReactNode } from "react"

interface Props {
  src: string
  alt?: string
  rtl?: boolean
  ttb?: boolean
  width?: number
  height?: number
  col?: number
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  classNames?: {
    TextAndImage__image: string
  }
  styles?: {
    TextAndImage__image: React.CSSProperties
  }
}

const TextAndImage = ({src, alt, children, rtl = false, ttb = false, width, height, col, className = '', classNames, style, styles}: Props) => {
  const directionX = rtl ? 'rtl md:flex-row-reverse' : 'md:flex-row';
  const directionY = ttb ? 'ttb flex-col-reverse' : 'flex-col'
  const colWidth = col ? `md:w-1/${col}` : ''
  return (
    <div className={`flex ${directionX} ${directionY} ${className}`} style={style}>
      <div className={`p-4 mb-12 md:mb-0 ${colWidth}`}>{children}</div>
      <div className={`${classNames?.TextAndImage__image || ''} p-4 relative ${colWidth}`} style={styles?.TextAndImage__image}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          layout={!width && !height ? 'fill' : undefined}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default TextAndImage