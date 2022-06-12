import { ReactNode } from "react";
import { CommonProps } from "src/types/CommonProps";
import Title from "../Title";

interface Props extends CommonProps {
  en?: string;
  h2?: string
  h3?: string
  children: ReactNode
}
const TitleAndText = ({en, h2, h3, children, className, style}: Props) => {
  return (
    <div>
      <Title en={en} h2={h2} h3={h3} />
      <div className="text">{children}</div>
    </div>
  )
}

export default TitleAndText