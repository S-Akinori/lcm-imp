import GalleryBox from "src/components/parts/Gallery/GalleryBox"
import Title from "src/components/parts/Title"
import { galleryContents } from "src/contents/gallery"
import {Navigation, Pagination} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Voices = () => {

  return (
    <div>
      <Title h2="お客様の声" />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2
          }
        }}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.custom-swiper-next-button',
          prevEl: '.custom-swiper-prev-button'
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-swiper-bullet--main',
          bulletActiveClass: 'swiper-pagination-bullet, custom-swiper-bullet--accent'
        }}
      >
        {galleryContents && galleryContents.map(content => (
          <SwiperSlide key={content.id}>
            <GalleryBox src={content.src} date={content.date} info={content.info} href={content.href} title={content.title} text={content.text} />
          </SwiperSlide>
        ))}
        <div className="top-auto bottom-4 md:-bottom-2 custom-swiper-next-button custom-swiper-next-button--base-cont font_en">next</div>
        <div className="top-auto bottom-4 md:-bottom-2 custom-swiper-prev-button custom-swiper-prev-button--base-cont font_en">prev</div>
      </Swiper>
    </div>
  )
}

export default Voices