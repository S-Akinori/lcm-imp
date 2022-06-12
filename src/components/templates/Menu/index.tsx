import Image from "next/image"
import Link from "next/link"
import Title from "src/components/parts/Title"
import { menus } from "src/contents/menu"

const Menu = () => {
  return (
    <div>
      <Title h2="そのほかのメニュー" />
      <div className="flex flex-wrap Menu">
        {menus && menus.map(menu => (
          <Link key={menu.id} href={menu.link}><a className="block p-4 md:w-1/3">
              <Image 
                src={menu.thumbnail}
                width={600}
                height={400}
                alt={menu.title}
              />
              <h3 className="mb-0">{menu.title}</h3>
              <div>{menu.text}</div>
          </a></Link>
        ))}
      </div>
    </div>
  )
}

export default Menu