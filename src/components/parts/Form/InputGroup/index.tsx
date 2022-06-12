import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: ReactNode
}
const InputGroup = ({children, className = '', style}: Props) => {
  return (
    <div className={`md:flex items-start mb-4 ${className}`} style={style}>{children}</div>
  )
}

export default InputGroup