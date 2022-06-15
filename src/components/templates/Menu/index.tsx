import Image from "next/image"
import Link from "next/link"
import Title from "src/components/parts/Title"
import { menus } from "src/contents/menu"

const Menu = () => {
  return (
    <>
      <style jsx>{`
        .Menu__image::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid var(--base-background);
          width: 95%;
          height: 95%;
        }  
      `}</style>
      <div>
        <Title h2="そのほかのメニュー" />
        <div className="flex flex-wrap Menu">
          {menus && menus.map(menu => (
            <Link key={menu.id} href={menu.link}><a className="block p-4 mb-8 md:w-1/3">
              <div className="relative flex mb-2 Menu__image">
                <Image
                  src={menu.thumbnail}
                  width={600}
                  height={400}
                  alt={menu.title}
                />
              </div>
              <div className="text-sm">{menu.title}</div>
            </a></Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Menu