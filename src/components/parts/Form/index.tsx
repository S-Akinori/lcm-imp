import { FormEventHandler, ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
}
const Form = ({children, className = '', style, onSubmit}: Props) => {
  return (
    <form className={className} style={style} onSubmit={onSubmit}>{children}</form>
  )
}

export default Form