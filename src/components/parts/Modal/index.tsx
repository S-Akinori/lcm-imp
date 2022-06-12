import { useState } from "react"
import { CommonProps } from "src/types/CommonProps"
import CloseIcon from "../Icons/Close"

interface Props extends CommonProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}
const Modal = ({children, open, className = '', style, onClose}: Props) => {
  const [initialClass, setInitialClass] = useState('invisible')
  const onAnimationStart = () => {
    if(open) {
      setInitialClass('')
    }
  }
  const onAnimationEnd = () => {
    if(!open) {
      setInitialClass('invisible')
    }
  }
  return (
    <div 
      className={`fixed top-0 left-0 z-50 w-full h-full Modal ${open ? 'fadeIn' : 'fadeOut'} ${initialClass} ${className}`} 
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd} 
      style={style}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-base-cont opacity-60" onClick={() => onClose()}></div>
      <div className="flex items-center h-full w-full">
        <div className="relative w-full">
          <div className="absolute -top-10 left-1/2 cursor-pointer" onClick={() => onClose()}><CloseIcon color="#F6F6F6" /></div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal