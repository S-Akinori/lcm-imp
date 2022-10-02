import clsx from "clsx"
import { CommonProps } from "src/types/CommonProps"
import css from 'styled-jsx/css'

interface Props extends CommonProps {
  children: React.ReactNode
  type?: 'default' | 'shift'
  color?: 'none' | 'main'
}

const Box = ({type = 'default', color = 'main', children}: Props) => {
  const colorClassObj = {
    none: '',
    main: 'bg-main'
  }
  return (
    <>
      {type === 'default' && <div className={clsx(['p-4 relative shadow-md', colorClassObj[color]])}>{children}</div>}
      {type === 'shift' && <BoxShift color={color}>{children}</BoxShift>}
    </>
  )
}

export const BoxShift = ({children, color = 'main'}: Props) => {
  const colorClassObj = {
    none: '',
    main: 'before:bg-main'
  }
  return (
    <div
      className={clsx([
        "p-6 relative border border-accent before:content-[''] before:block before:absolute before:left-2 before:top-2 before:-z-10 before:w-full before:h-full",
        colorClassObj[color]
      ])}
    >
      {children}
    </div>
  )  
}

export default Box