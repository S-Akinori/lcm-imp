import { ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: ReactNode
  type?: 'th' | 'td'
  
}

const TableCell = ({type = 'td', children, className = '', style}: Props) => {
  const myClass = "p-2 md:p-4" + className
  return (
    <div className={type == 'th' ? 'TableCell__th md:w-48 ' + myClass : 'TableCell__td md:w-3/4 ' + myClass}>{children}</div>
  )
}

export default TableCell