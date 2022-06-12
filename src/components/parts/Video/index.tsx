import { useEffect, useRef } from "react"
import ReactPlayer from "react-player"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  src: string
  width?: string
  height?: string
}

const Video = ({src, width = '100%', height = '100%'}: Props) => {
  return (
    <div className="relative h-0 oveflow-hidden" style={{paddingBottom: '56.25%'}}>
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video