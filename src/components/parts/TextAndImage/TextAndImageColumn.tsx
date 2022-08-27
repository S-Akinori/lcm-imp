import Image from "next/image"

interface Props {
  children: React.ReactNode
  src: string
  width?: number
  height?: number
  alt: string
}
const TextAndImageColumn = ({children, src, width = 600, height = 400, alt}: Props) => {
  return (
    <div>
      <div>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          objectFit="cover"
        />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default TextAndImageColumn