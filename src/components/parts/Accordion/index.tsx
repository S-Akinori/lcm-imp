import { useState } from "react"
import {CommonChildrenProps} from "src/types/CommonProps"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import clsx from "clsx";

const Accordion = ({children}: CommonChildrenProps) => {
  return (
    <div>{children}</div>
  )
}

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

export const AccordionItem = ({title, children}: AccordionItemProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-2 border-b border-b-accent">
      <div className="mb-2 relative">
        <button onClick={(e) => setOpen(!open)} className="block relative w-full text-left">{title}</button>
        <div className={clsx(['absolute top-0 right-0 duration-300', open ? 'rotate-180' : 'rotate-0'])}><KeyboardArrowDownIcon /></div>
      </div>
      <div className={clsx(['duration-300', open ? 'opacity-100 h-full' : 'opacity-0 h-0'])}>{children}</div>
    </div>
  )
}

export default Accordion