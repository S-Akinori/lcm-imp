import Image from "next/image"

interface Props {
  children: React.ReactNode
  src: string
  width?: number
  height?: number
  alt: string
}
const TextAndImageRow = ({children, src, width = 1200, height = 800, alt}: Props) => {
  return (
    <div className="md:flex items-stretch w-full">
      <div className="relative z-10 md:p-4 md:left-8 md:w-1/2" style={{fontSize: '0'}}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </div>
      <div className="relative z-20 p-6 bg-main md:right-8 md:p-12 md:pl-20 md:w-1/2 md:z-0">
        {children}
      </div>
    </div>
  )
}

export default TextAndImageRow