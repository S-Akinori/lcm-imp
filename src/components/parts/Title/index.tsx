import React, { ReactNode } from "react";

interface Props {
  en?: string;
  h2?: string
  h3?: string
  children?: ReactNode
  type?: 'default' | 'x-border'
}
const Title = ({en, h2, h3, type = 'default', children}: Props) => {
  return (
    <>
      <style jsx>{`
        .wrapper.default {
          padding-left: 1rem;
        }
        .wrapper.x-border .Title__inner {
          position: relative;
          z-index: 1;
          padding: 0 1rem;
          margin-left: 3rem;
          background: #FFF;
          width: max-content;
        }
        .wrapper::before {
          content: '';
          display: block;
          position: absolute;
          background: var(--accent-color);
        }
        .wrapper.default::before {
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          {/* max-height: 2rem; */}
        }
        .wrapper.x-border::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
        }
        .wrapper.x-border::after {
          content: '';
          display: block;
          position: absolute;
          top: calc(50% + 2px);
          left: 0;
          background: var(--accent-color);
          width: 100%;
          height: 1px;
        }
        @media(max-width: 768px) {
          .wrapper::before {
            height: 1.25rem;
          }
          .wrapper.default::before {
            top: 0.5rem;
          }
          .wrapper.x-border .Title__inner {
            margin: auto;
          }
        }
      `}</style>
      <div className={`relative mb-8 text-xl wrapper ${type}`}>
        <div className="Title__inner">
          {en && <div className="title_en font_en leading-tight">{en}</div>}
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          {children && <div className="Title__text">{children}</div>}
        </div>
      </div>
    </>
  )
}

export default Title