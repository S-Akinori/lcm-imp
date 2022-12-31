import Image from "next/image"
import { ImageObject } from "src/types/CommonProps"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

interface Props {
  images: ImageObject[]
}
const DressSwiper = ({images}: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination
      slidesPerView={1}
      centeredSlides
      className="md:w-1/2 mx-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="text-center"><Image src={image.url} width={image.width} height={image.height} /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DressSwiper