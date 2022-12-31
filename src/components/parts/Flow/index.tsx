import clsx from "clsx"
import Image, { ImageProps } from "next/image"
import { CommonProps } from "src/types/CommonProps"

interface Props {
  children: React.ReactNode
}

const Flow = ({children}: Props) => {
  return (
    <div className="Flow flex flex-wrap">
      {children}
    </div>
  )
}

export default Flow

interface FlowItemProps extends CommonProps {
  children: React.ReactNode
  image: ImageProps
}

export const FlowItem = ({children, image, className}: FlowItemProps) => {
  return (
    <>
      <style jsx>{`
        .FlowItem:not(:last-of-type)::after {
          content: '';
          display: block;
          position: absolute;
          top: 25%;
          right: 0;
          transform: translateX(50%);
          width: 30px;
          aspect-ratio: 1/2;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          background: var(--main-color);
        }
        @media screen and (max-width: 768px) {
          .FlowItem:not(:last-of-type)::after {
            top: auto;
            bottom: 0;
            right: 50%;
            transform: tranlateX(50%);
            width: 30px;
            aspect-ratio: 2/1;
            clip-path: polygon(0 0, 100% 0, 50% 100%);
          }
        }
      `}</style>
      <div className={clsx(['FlowItem py-4 md:px-4 relative flex md:block', className])}>
        <div className="text-center shrink-0 p-2">
          <Image 
            src={image.src} 
            width={image.width} 
            height={image.height}  
          />
        </div>
        <div className="md:text-center p-2">{children}</div>
      </div>
    </>
  )
}