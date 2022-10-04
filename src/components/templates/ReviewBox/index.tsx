import clsx from "clsx"
import Box from "src/components/parts/Box"
import { CommonChildrenProps } from "src/types/CommonProps"

const ReviewBox = ({children}: CommonChildrenProps) => {
  return (
    <>
      <style jsx>{`
        div::before {
          content: '';
          display: block;
          position: absolute;
          left: 5px;
          
        }  
      `}</style>
      <Box type="default" color="none">{children}</Box>
    </>
  )
}

export const ReviewBoxTitle = ({children}: CommonChildrenProps) => {
  return (
    <>
      <style jsx>{`
        h3 {
          position: relative;
          border-bottom: 2px solid var(--accent-color);
        }
        h3::before {
          content: '';
          display: block;
          position: absolute;
          left: 3rem;
          bottom: -12px;
          border-right: 2px solid var(--accent-color);
          width: 20px;
          height: 20px;
          background: #FFF;
          transform: rotate(45deg);
        }
      `}</style>
      <h3>{children}</h3>
    </>
  )
}

interface ReviewBoxListProps {
  listItems: string[]
  markedIndex: number
}

const markedClass = 'bg-main'
export const ReviewBoxList = ({listItems, markedIndex}: ReviewBoxListProps) => {
  const modifiedMarkedIndex = 5 - markedIndex
  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index} className={clsx(["border-b border-accent border-dashed before:hidden", modifiedMarkedIndex === index ? markedClass : ''])}>{item}</li>
      ))}
    </ul>
  )
}

export default ReviewBox