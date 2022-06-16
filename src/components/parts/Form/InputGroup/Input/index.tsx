import { ChangeEventHandler, FocusEventHandler, LegacyRef, ReactNode } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { CommonProps } from "src/types/CommonProps"

interface Validation {
  [key: string]: any
}

interface Props {
  register?: UseFormRegister<any>
  name: string
  id?: string
  placeholder? : string
  type?: string
  defaultValue?: string
  defaultChecked?: boolean
  validation?: Validation
}

const Input = ({register, name, id, placeholder, type = 'text', defaultValue, defaultChecked = false, validation}: Props) => {
  if(register && name) {
    return (
      <>
        {type == 'textarea' && <textarea {...register(name, {...validation})} rows={5} id={id} placeholder={placeholder}>{defaultValue}</textarea>}
        {type !== 'textarea' && <input {...register(name, {...validation})} id={id} placeholder={placeholder} type={type} defaultValue={defaultValue} defaultChecked={defaultChecked} />}
      </>
    )
  } else {
    return (
      <>
        {type == 'textarea' && <textarea name={name} rows={5} id={id} placeholder={placeholder}>{defaultValue}</textarea>}
        {type !== 'textarea' && <input name={name} id={id} placeholder={placeholder} type={type} defaultValue={defaultValue} defaultChecked={defaultChecked} />}
      </>
    )
  }
}

export default Input