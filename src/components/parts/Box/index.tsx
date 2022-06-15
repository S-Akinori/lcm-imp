import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: React.ReactNode
}
const Box = ({children, className, style}: Props) => {
  return (
    <>
      <style jsx>{`
        div {
          box-shadow: 2px 4px 3px #F6F6F6;
        }  
      `}</style>
      <div className={`bg-main ${className}`} style={style}>{children}</div>
    </>
  )
}

export default Box