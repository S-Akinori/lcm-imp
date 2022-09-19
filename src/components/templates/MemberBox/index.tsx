import Image from "next/image"
import { ImageObject } from "src/types/CommonProps"
import styles from "./index.module.css"

interface Props {
  name: string
  children: React.ReactNode
  role?: string
  image: ImageObject
}

const MemberBox = ({name, role, children, image}: Props) => {
  return (
    <div className="md:flex mb-20">
      <div className="md:w-1/3 md:px-4">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={name}
        />
        <div className="text-center whitespace-pre-wrap">{name}</div>
        {role && <div className="text-center whitespace-pre-wrap text-accent">{role}</div>}
      </div>
      <div className={`md:w-2/3 ${styles.box}`}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default MemberBox

interface MemberBoxInfoProps {
  children: React.ReactNode
  className?: string
}
export const MemberBoxInfo = ({children, className}: MemberBoxInfoProps) => {
  return <div className={`whitespace-pre-wrap text-sm ${className}`}>{children}</div>
}

interface MemberBoxTextProps {
  children: React.ReactNode
  className?: string
}
export const MemberBoxText = ({children, className}: MemberBoxTextProps) => {
  return <div className={`whitespace-pre-wrap ${className}`}>{children}</div>
}