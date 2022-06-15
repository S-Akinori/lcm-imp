import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { CommonProps } from "src/types/CommonProps"
import SwiperCore, {Swiper as sw, Navigation, Pagination, EffectFade, Keyboard} from "swiper"
import {Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Animation from "../Animation";
import Modal from "../Modal";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import CloseIcon from "../Icons/Close";

interface Props extends CommonProps {
  images: {
    id: string
    src: string
    alt: string
  }[]
}

const ImageGallery = ({images, className = '', style}: Props) => {
  const [open, setOpen] = useState(false)
  const [initialIndex, setInitialIndes] = useState(0)
  const [swiper, setSwiper] = useState<sw | null>(null)
  const nextEl = useRef(null)
  const prevEl = useRef(null)

  const toggleSwiper = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open)
    if(e.currentTarget.dataset.index) {
      setInitialIndes(parseInt(e.currentTarget.dataset.index))
    }
  }

  const closeGallery = () => {
    setOpen(false)
  }

  const slideToTarget = (swiper: sw, index?: number) => {
    swiper.slideTo(index || initialIndex, 0);
  }

  useEffect(() => {
    if(open && swiper) {
      swiper.slideTo(initialIndex, 0);
    }
  }, [open])

  return (
    <>
    <div className={`relative ImageGallery ${className}`}>
      <Modal open={open} onClose={closeGallery}>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Keyboard]}
          navigation={{
            nextEl: nextEl.current,
            prevEl: prevEl.current
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          centeredSlides
          slidesPerView={1}
          onSwiper={swiper => setSwiper(swiper)}
        >
          {images.map(image => (
            <SwiperSlide key={image.id} className="text-center">
              <Image
                src={image.src}
                width={600}
                height={400}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
          <div ref={nextEl} className="custom-swiper-next-button font_en">next</div>
          <div ref={prevEl} className="custom-swiper-prev-button font_en">prev</div>
        </Swiper>
      </Modal>
      <div className="flex flex-wrap ImageGallery__images">
        {images.map((image, index) => (
          <div data-index={index} key={image.id} className="w-1/2 md:w-1/4 px-2 py-4 cursor-pointer ImageGallery__images__item" onClick={toggleSwiper}>
            <Image
              src={image.src}
              width={600}
              height={400}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ImageGallery