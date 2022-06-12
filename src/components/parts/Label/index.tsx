import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: ReactNode  
}

const Label = ({children, className = '', style}: Props) => {
  return(
    <div className={`inline-block text-center bg-main p-2 Label ${className}`} style={style}>{children}</div>
  )
}

export default Label