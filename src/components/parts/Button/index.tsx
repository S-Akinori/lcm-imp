import Link from "next/link"
import styles from "./index.module.css"

interface Props {
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: '_blank' 
  children: React.ReactNode
}
const Button = ({href='', className = '', style, target, children}:Props) => {
  const btnClass = `inline-block relative bg-base-color-dark py-4 pl-8 pr-16 ${styles.btn}`;
  return (
    <>
      {!href && <button className={btnClass} style={style}>{children}</button>}
      {(href && target) && <a className={btnClass}  href={href} target={target} rel="noreferrer" style={style}>{children}</a>}
      {(href && !target) && <Link href={href}><a className={btnClass}  style={style}>{children}</a></Link>}
    </>
  )
}

export default Button