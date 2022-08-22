import React, { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: ReactNode
}
const InputGroup = ({children, className = '', style}: Props) => {
  return (
    <div className={`md:flex mb-4 ${className}`} style={style}>
      {React.Children.map(children, child => (
        <div className="px-1">{child}</div>
      ))}
    </div>
  )
}

export default InputGroup