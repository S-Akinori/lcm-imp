import Link from "next/link"
import styles from "./ButtonRounded.module.css"

interface Props {
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: '_blank' 
  children: React.ReactNode
}
const ButtonRounded = ({href='', className = '', style, target, children}:Props) => {
  const btnClass = `inline-block relative py-2 px-8 rounded-full ${styles.btn}`;
  return (
    <>
      {!href && <button className={btnClass} style={style}>{children}</button>}
      {(href && target) && <a className={btnClass}  href={href} target={target} rel="noreferrer" style={style}>{children}</a>}
      {(href && !target) && <Link href={href}><a className={btnClass}  style={style}>{children}</a></Link>}
    </>
  )
}

export default ButtonRounded