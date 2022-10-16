import Image from "next/image"
import Link from "next/link"
import Box from "src/components/parts/Box"
import { ImageObject } from "src/types/CommonProps"

interface Props {
  slug: string
  imageSrc: string
  title: string
  name: string
  children: React.ReactNode
  date?: string
  movieType: string
}

const ReviewPostBox = ({slug, imageSrc, name, date, title, children, movieType}: Props) => {
  return (
    <Box>
      <div className="flex mb-2">
        <div className="relative pr-2 w-32 h-32 shrink-0">
          <Link href={"/review/" + slug}>
            <a>
              <Image
                src={imageSrc}
                layout="fill"
                objectFit="cover"
                alt={title}
              />
            </a>
          </Link>
        </div>
        <div className="pl-2">
          <div className="text-lg mb-2"><Link href={"/review/" + slug}>{title}</Link></div>
          <div className="text-sm">{movieType}</div>
          <div className="text-sm">{name}</div>
          <div className="text-sm">{date} 挙式</div>
        </div>
      </div>
      <div>{children}</div>
    </Box>
  )
}

export default ReviewPostBox