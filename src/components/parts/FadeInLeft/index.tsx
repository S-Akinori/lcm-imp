import { useInView } from "react-intersection-observer"
import { CommonProps } from "src/types/CommonProps";

interface Props extends CommonProps {
  children: React.ReactNode
}

const FadeInLeft = ({children, className = '', style}: Props) => {
  const { ref, inView, entry } = useInView({
    rootMargin: '-50px',
    triggerOnce: true
  });
  return (
    <div ref={ref} className={inView ? 'growLeft' : ''} style={style}>
      {children}
    </div>
  )
}

export default FadeInLeft