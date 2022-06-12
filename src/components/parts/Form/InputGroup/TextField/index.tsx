import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  id?: string
  placeholder?: string
  multiple?: boolean
  name: string
  defaultValue?: string
  required?: boolean
  onChange?: ChangeEventHandler
  onBlur?: FocusEventHandler
}

const TextField = ({id, placeholder = '', multiple = false, name, defaultValue, required = false, onChange, onBlur, className, style}: Props) => {
  if(multiple) {
    return (
      <textarea 
        id={id} 
        name={name} 
        className={className} 
        rows={5} 
        placeholder={placeholder} 
        onChange={onChange} 
        onBlur={onBlur}
      >{defaultValue}</textarea>
    )
  } else {
    return (
      <input 
        id={id} 
        name={name} 
        className={className} 
        placeholder={placeholder} 
        defaultValue={defaultValue} 
        required={required} 
        onChange={onChange} 
        onBlur={onBlur}
      />
    )
  }
}

export default TextField