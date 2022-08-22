import Link from "next/link"
import styles from "./index.module.css"

interface Props {
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: '_blank' 
  color?: 'base' | 'main' | 'accent'
  query?: {
    [key: string]: string
  }
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({href='', className = '', color = 'base', style, target, children, query, onClick}:Props) => {
  let colorClass = 'bg-base-color-dark text-base-cont'
  if(color === 'main') {
    colorClass = 'bg-main text-main-cont'
  } else if(color === 'accent') {
    colorClass = 'bg-accent text-accent-cont'
  }
  const btnClass = `inline-block relative ${colorClass} py-4 pl-8 pr-16 ${styles.btn} ${className}`;
  return (
    <>
      {!href && <button className={btnClass} style={style} onClick={onClick}>{children}</button>}
      {(href && target) && <a className={btnClass}  href={href} target={target} rel="noreferrer" style={style}>{children}</a>}
      {(href && !target) && <Link href={{pathname: href, query: query}} ><a className={btnClass} style={style}>{children}</a></Link>}
    </>
  )
}

export default Button