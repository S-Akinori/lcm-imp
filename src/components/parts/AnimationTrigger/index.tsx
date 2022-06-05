import { ReactNode } from "react"
import { useInView } from "react-intersection-observer";
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children?: ReactNode
  animation: string
  startClass? :string
  endClass?: string
  rootMargin?: string
  triggerOnce? : boolean
}

const AnimationTrigger = ({children, rootMargin = '-50px', animation, startClass = '', endClass = '', triggerOnce = false, className, style}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
  });
  return (
    <div ref={ref} className={className} style={style}>
      <div className={inView ? animation : startClass}>{children}</div>
    </div>
  )
}

export default AnimationTrigger