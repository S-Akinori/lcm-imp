import Image from "next/image"

interface Props {
  children: React.ReactNode
  src: string
  width?: number
  height?: number
  alt: string
}
const TextAndImageRotation = ({children, src, width = 1200, height = 800, alt}: Props) => {
  return (
    <div className="md:flex items-stretch">
      <div className="relative z-10 md:w-1/2 md:left-6 md:p-4" style={{transform: 'rotate(-8deg)'}}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          objectFit="cover"
        />
      </div>
      <div className="relative p-6 bg-base md:w-1/2 md:right-6 md:p-12 md:pl-20">
        {children}
      </div>
    </div>
  )
}

export default TextAndImageRotation