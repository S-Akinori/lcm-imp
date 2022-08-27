import Link from "next/link"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
  href?: string
  className?: string
  style?: React.CSSProperties
  target?: '_blank' 
  color?: 'base' | 'main' | 'accent'
  query?: {
    [key: string]: string
  }
  subText?: string
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const ActionButton = ({href='', className = '', color = 'accent', style, target, subText, children, query, onClick}:Props) => {
  let colorClass = 'bg-base-color-dark text-base-cont'
  if(color === 'main') {
    colorClass = 'bg-main text-main-cont'
  } else if(color === 'accent') {
    colorClass = 'bg-accent text-accent-cont'
  }
  const btnClass = `inline-block relative ${colorClass} p-2 ${className} duration-300 hover:opacity-90`;

  return (
    <>
      {!href && (
        <button className={btnClass} style={style} onClick={onClick}>
          <span className="block py-2 px-16 border border-main text-center md:px-24">
            {subText && <span>＼ {subText} ／ <br /></span>}
            <span className="text-xl font-bold">{children}</span>
          </span>
          <KeyboardArrowDownIcon className="absolute right-8 top-1/2 -translate-y-1/2 bg-main text-accent rounded-full" />
        </button>
      )}
      {href && (
        <Link href={{pathname: href, query: query}} target={target} rel={target && "noreferrer"}>
          <a className={btnClass} style={style}>
            <span className="block py-2 px-16 border border-main text-center md:px-24">
              {subText && (<span>＼ {subText} ／ <br /></span>)}
              <span className="text-xl font-bold">{children}</span>
            </span>
            <KeyboardArrowDownIcon className="absolute right-8 top-1/2 -translate-y-1/2 bg-main text-accent rounded-full" />
          </a>
        </Link>
      )}
    </>
  )
}

export default ActionButton