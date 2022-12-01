import clsx from "clsx"
import { CommonProps } from "src/types/CommonProps"
import css from 'styled-jsx/css'

interface Props extends CommonProps {
  children: React.ReactNode
  type?: 'default' | 'shift'
  color?: 'none' | 'base' | 'main' | 'accent'
}

const Box = ({type = 'default', color = 'main', children, className, style}: Props) => {
  const colorClassObj = {
    none: '',
    base: 'bg-base text-base-cont',
    main: 'bg-main text-main-cont',
    accent: 'bg-accent text-accent-cont'
  }
  return (
    <>
      {type === 'default' && <div className={clsx(['p-4 relative shadow-md', colorClassObj[color]], className)}>{children}</div>}
      {type === 'shift' && <BoxShift color={color} className={className}>{children}</BoxShift>}
    </>
  )
}

export const BoxShift = ({children, color = 'main', className, style}: Props) => {
  const colorClassObj = {
    none: '',
    base: 'before:bg-base',
    main: 'before:bg-main'
  }
  return (
    <div
      className={clsx([
        "p-6 relative border border-accent before:content-[''] before:block before:absolute before:left-2 before:top-2 before:-z-10 before:w-full before:h-full",
        colorClassObj[color],
        className
      ])}
    >
      {children}
    </div>
  )  
}

export default Box