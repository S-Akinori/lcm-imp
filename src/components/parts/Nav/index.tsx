import Link from "next/link"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  nav: {
    id: string
    href: string
    linkText: string
    subText: string
  }[]
}
const Nav = ({nav, className, style}: Props) => {
  return (
    <nav className={className} style={style}>
      <ul className="flex justify-center flex-wrap">
        {nav && nav.map(navItem => (
          <li key={navItem.id} className="px-2 lg:text-xs xl:text-sm before:hidden"><Link href={navItem.href}>{navItem.subText}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav