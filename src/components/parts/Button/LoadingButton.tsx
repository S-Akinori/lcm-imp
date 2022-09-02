import Link from "next/link"
import { Spinner } from "../Icons"
import styles from "./ButtonRounded.module.css"

interface Props {
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: '_blank' 
  color?: string
  icon?: React.ReactNode
  children: React.ReactNode
  loading: boolean
  done?: boolean
  doneChildren?: React.ReactNode
  disabled?: boolean
}
const LoadingButton = ({href='', className = '', loading, icon=<Spinner/>, done = false, doneChildren, color, style, target, children, disabled}:Props) => {
  const btnClass = `inline-block relative bg-${color || 'base-color-dark'} text-${color || 'base-cont'} py-2 px-8 rounded-full ${styles.btn} ${className}`;
  let content = undefined;
  if(done) {
    content = doneChildren
  } else if(loading) {
    content = icon
  } else {
    content = children
  }

  return (
    <>
      {!href && <button disabled={disabled} className={btnClass} style={style}>{content}</button>}
      {(href && target) && <a className={btnClass}  href={href} target={target} rel="noreferrer" style={style}>{content}</a>}
      {(href && !target) && <Link href={href}><a className={btnClass}  style={style}>{content}</a></Link>}
    </>
  )
}

export default LoadingButton