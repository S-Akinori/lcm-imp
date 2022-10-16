import clsx from "clsx"
import { useInView } from "react-intersection-observer"

interface Props {
  position?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
}
const CircleBackground = ({position = {top: '0px', left: '0px'}}: Props) => {
  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });

  const style: React.CSSProperties = {
    ...position,
    zIndex: -1
  }
  return (
    <div ref={ref} className={clsx(['absolute border border-main border-4 rounded-full duration-1000 w-80 h-80', inView ? 'scale-100' : 'scale-0'])} style={style}></div>
  )
}

export default CircleBackground