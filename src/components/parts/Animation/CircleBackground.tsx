import clsx from "clsx";
import { useInView } from "react-intersection-observer";

interface Position {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

interface Props {
  children: React.ReactNode
  position?: Position
  threshold?: number
  width?: number
  md?: {
    position?: Position
    width?: number
  }
}

const defaultPosition = {
  top:'-50px', 
  left:'-50px', 
  bottom: 'auto', 
  right: 'auto'
}
const CircleBackground = ({
  children, 
  position = {top:'-50px', left:'-50px'}, 
  threshold = 0.25, 
  width = 250, 
  md = {position: defaultPosition, width: 250}
}: Props) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });
  const newPosition = {...defaultPosition, ...position}
  return (
    <>
      <style jsx>{`
        .CircleBackground {
          position: relative;
        }
        .CircleBackground::before {
          content: '';
          display: block;
          position: absolute;
          transform: scale(0);
          top: ${newPosition.top};
          right: ${newPosition.right};
          bottom: ${newPosition.bottom};
          left: ${newPosition.left};
          width: ${width}px;
          aspect-ratio: 1 / 1;
          border: 4px solid var(--main-color);
          border-radius: 50%;
        }
        .CircleBackground.animation::before {
          animation: circleChange 1s ease both;
        }
        @media(min-width: 768px) {
          .CircleBackground::before {
            top: ${md?.position?.top ?? newPosition.top};
            right: ${md?.position?.right ?? newPosition.right};
            bottom: ${md?.position?.bottom ?? newPosition.bottom};
            left: ${md?.position?.left ?? newPosition.left};
            width: ${md.width ?? width}px
          }
        }
        @keyframes circleChange {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
      <div ref={ref} className={clsx(['CircleBackground', inView ? 'animation' : ''])}><div className="relative z-10">{children}</div></div>
    </>
  )
}

export default CircleBackground