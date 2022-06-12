import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  htmlFor?: string
  children: ReactNode
}
const InputLabel = ({children, htmlFor, className, style}: Props) => {
  return (
    <label htmlFor={htmlFor} className={className} style={style}>{children}</label>
  )
}

export default InputLabel