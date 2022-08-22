import { UseFormRegister } from "react-hook-form"

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
  checked?: boolean
  validation?: Validation
  onChange? : React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

const Input = ({register, name, id, placeholder, type = 'text', defaultValue, defaultChecked, checked, validation, onChange, disabled}: Props) => {
  if(register && name) {
    return (
      <>
        {type == 'textarea' && <textarea {...register(name, {...validation})} rows={5} id={id} placeholder={placeholder} disabled={disabled}>{defaultValue}</textarea>}
        {type !== 'textarea' && <input {...register(name, {...validation})} id={id} placeholder={placeholder} type={type} defaultValue={defaultValue} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />}
      </>
    )
  } else {
    return (
      <>
        {type == 'textarea' && <textarea name={name} rows={5} id={id} placeholder={placeholder} disabled={disabled}>{defaultValue}</textarea>}
        {type !== 'textarea' && <input name={name} id={id} placeholder={placeholder} type={type} defaultValue={defaultValue} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />}
      </>
    )
  }
}

export default Input