import { info } from "console"
import Image from "next/image"
import Link from "next/link"

interface Props {
  src: string
  date?: string
  info?: string
  title: string
  text: string
  href: string
}

const GalleryBox = ({src, date, info, href, title, text}: Props) => {
  return(
    <>
      <style jsx>{`
        .GalleryBox {
          transition: 300ms;
        }
        .GalleryBox:hover {
          transform: translateY(-10px);
        }
      `}</style>
      <div className="p-4 bg-white GalleryBox" style={{boxShadow: '2px 4px 3px var(--main-color)'}}>
        <Link href={href}>
          <a className="block">
            <div className="flex">
              <div className="shrink-0 GalleryBox__image">
                <Image 
                  src={src}
                  width={100}
                  height={100}
                  alt={title}
                />
              </div>
              <div className="px-2">
                {date && <div className="text-xs">{date}</div>}
                <h3 className="text-base !text-accent mb-0">{title}</h3>
                {info && <div className="text-xs whitespace-pre-wrap">{info}</div>}
              </div>
            </div>
            <div className="GalleryBox__text">{text}</div>
          </a>
        </Link>
      </div>
    </>
  )
}

export default GalleryBox