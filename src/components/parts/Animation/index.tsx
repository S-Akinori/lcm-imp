import { useEffect } from "react"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: React.ReactNode
  normalAnimation?: string
  reverseAnimation?: string
  startClass?: string
  isActive: boolean
  type?: 'transition' | 'animation'
}
const Animation = ({children, normalAnimation, reverseAnimation, startClass = '', isActive, type = 'transition', className, style}: Props) => {
  if(type == 'transition') {
    return (
      <div className={isActive ? normalAnimation + ' active' : normalAnimation + ' ' + startClass}>{children}</div>
    )
  } else {
    return (
      <div 
        className={isActive ? normalAnimation : startClass}
      >{children}</div>
    )
  }
}
export default Animation