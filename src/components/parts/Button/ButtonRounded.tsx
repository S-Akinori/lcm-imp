import Link from "next/link"
import styles from "./ButtonRounded.module.css"

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
const ButtonRounded = ({href='', className = '', color = 'base', style, target, children, query, onClick}:Props) => {
  let colorClass = 'bg-base-color-dark text-base-cont'
  if(color === 'main') {
    colorClass = 'bg-main text-main-cont'
  } else if(color === 'accent') {
    colorClass = 'bg-accent text-accent-cont'
  }

  const btnClass = `inline-block relative ${colorClass} py-2 px-8 rounded-full ${styles.btn} ${className}`;
  const onClickAnchorButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    document.querySelector('html')?.classList.add('scroll-smooth');
    window.location.href = href;
    setTimeout(() => {
      document.querySelector('html')?.classList.remove('scroll-smooth');
    }, 1000)
  }

  return (
    <>
      {!href && <button className={btnClass} style={style} onClick={onClick}>{children}</button>}
      {(href && href.indexOf('#') === 0) && <button className={btnClass} style={style} onClick={onClickAnchorButton}>{children}</button>}
      {(href && href.indexOf('#') !== 0 && target) && <a className={btnClass} href={href} target={target} rel="noreferrer" style={style}>{children}</a>}
      {(href && href.indexOf('#') !== 0 && !target) && <Link href={{pathname: href, query: query}} ><a className={btnClass} style={style}>{children}</a></Link>}
    </>
  )
}

export default ButtonRounded