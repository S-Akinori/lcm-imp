import { UseFormRegister } from "react-hook-form"

interface Validation {
  [key: string]: any
}

interface Props {
  register?: UseFormRegister<any>
  name: string
  id?: string
  placeholder? : string
  defaultValue?: string
  validation?: Validation
  onChange? : React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea = ({register, name, id, placeholder, defaultValue, validation, onChange}: Props) => {
  return (
    register && name 
      ? <textarea {...register(name, {...validation})} rows={5} id={id} placeholder={placeholder} onChange={onChange}>{defaultValue}</textarea>
      : <textarea name={name} rows={5} id={id} placeholder={placeholder} onChange={onChange}>{defaultValue}</textarea>
    )
  }
}

export default TextArea