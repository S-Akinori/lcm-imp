import Link from "next/link"
import styles from "./ButtonRounded.module.css"

interface Props {
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: '_blank'
  color?: string
  children: React.ReactNode
  onClick? : React.MouseEventHandler<HTMLButtonElement>
}
const ButtonRounded = ({href='', color, className = '', style, target, onClick, children}:Props) => {
  const btnClass = `inline-block relative bg-${color || 'base-color-dark'} text-${color || 'base-cont'} py-2 px-8 rounded-full ${styles.btn} ${className}`;
  return (
    <>
      {!href && <button className={btnClass} style={style} onClick={onClick}>{children}</button>}
      {(href && target) && <a className={btnClass}  href={href} target={target} rel="noreferrer" style={style}>{children}</a>}
      {(href && !target) && <Link href={href}><a className={btnClass} style={style}>{children}</a></Link>}
    </>
  )
}

export default ButtonRounded