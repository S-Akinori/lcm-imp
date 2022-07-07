import { CommonProps } from "src/types/CommonProps";

interface Props extends CommonProps {
  children: string
  rotation?: number
  radius?: number
  fontSize?: number
  height?: number
}
const CircleText = ({rotation = 8, radius = 125, fontSize = 16, height = 30, children, className = '', style}: Props) => {
  return (
    <>
      <style jsx>{`
        .CircleText {
          position: relative;
          width: ${radius * 2}px; /* 直径 */
          height: ${height}px;
          font-size: ${fontSize}px;
          text-align: center;
          margin: 0;
        }
        .CircleText span {
          position: absolute;
          top: 0;
          left: calc(50% - ${fontSize / 2}px); /* 中心点、、文字サイズ分ずらす */
          display: inline-block;
          width: ${fontSize}px; /* 文字サイズより小さくしない */
          height: ${radius}px; /* 半径 */
          transform-origin: center bottom; /* 回転の基準点 */
        }
      `}</style>
      <div className={`CircleText ${className}`} style={style}>
        {children.split('').map((text, index) => (
          <span key={index} style={{transform: `rotate(${(rotation * index) - (rotation * (children.length - 1) /2)}deg)`}}>{text}</span>
        ))}
      </div>
    </>
  )
}

export default CircleText;