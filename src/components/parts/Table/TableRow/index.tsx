import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children : ReactNode
}

const TableRow = ({children, className = '', style}: Props) => {
  return (
    <div className={`md:flex TableRow ${className} border-b border-b-accent`} style={style}>{children}</div>
  )
}

export default TableRow