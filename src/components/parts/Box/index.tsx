import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: React.ReactNode
}
const Box = ({children, className, style}: Props) => {
  return (
    <>
      <style jsx>{`
        div {
          box-shadow: 2px 4px 3px var(--main-color);
        }  
      `}</style>
      <div className={`bg-base-color-dark shadow-xl shadow-base-color ${className}`} style={style}>{children}</div>
    </>
  )
}

export default Box