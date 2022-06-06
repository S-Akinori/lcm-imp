import React from "react";

interface Props {
  en?: string;
  h2?: string
  h3?: string
  children?: React.ReactNode
}
const Title = ({en, h2, h3}: Props) => {
  return (
    <>
      <style jsx>{`
        .wrapper::before {
          content: '';
          display: block;
          position: absolute;
          top: .75rem;
          left: 0;
          background: var(--accent-color);
          width: 1px;
          height: 2rem;
        }
        @media(max-width: 768px) {
          .wrapper::before {
            height: 1.25rem;
          }
        }
      `}</style>
      <div className="relative pl-4 mb-8 wrapper">
        {en && <div className="title_en font_en leading-tight">{en}</div>}
        {h2 && <h2>{h2}</h2>}
        {h3 && <h3>{h3}</h3>}
      </div>
    </>
  )
}

export default Title