import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: ReactNode,
}

const Table = ({children, className, style}: Props) => {
  return (
    <div className={`Table ${className}`} style={style}>{children}</div>
  )
}

export default Table