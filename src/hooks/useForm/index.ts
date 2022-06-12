import { ChangeEventHandler, FormEvent, FormEventHandler, useEffect, useState } from "react"

interface Error {
  [key: string]: string
}

interface RegisterOption {
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> 
  onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  validation?: Validation | null
}

interface Validation {
  [key: string]: string | boolean | undefined
}

interface Validations {
  [key: string]: Validation
}

const errorMessage = {
  required: '入力してください',
  email: '有効なメールアドレスを入力してください'
}

export const useForm = <T>(initialData: T) => {
  const [inputData, setInputData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Error>({})
  const [validations, setValidations] = useState<Validations>({})

  const updateValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value;
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const register = (name: string, {onChange = updateValue, onBlur = updateValue, validation = null}: RegisterOption = {}) => {
    console.log(name)
    return {
      name: name,
      onChange: onChange,
      onBlur: onBlur,
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>, func: (data: T) => void) => {
    e.preventDefault()
    console.log(validations)

    func(inputData);
  }

  return {register, setInputData, inputData, errors, handleSubmit}
}