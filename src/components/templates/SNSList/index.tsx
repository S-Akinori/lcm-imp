import Image from "next/image"
import { SNS } from "src/contents/common"

const SNSList = () => {
  return (
    <div className="flex justify-center mb-4 md:justify-start">
      {SNS && SNS.map(item => (
        <div key={item.id} className="pr-4"><a href={item.href} target="_blank" rel="noreferrer">
          <Image
            src={item.src}
            width={40}
            height={40}
            alt={item.linkText}
          />
        </a></div>
      ))}
    </div>
  )
}

export default SNSList