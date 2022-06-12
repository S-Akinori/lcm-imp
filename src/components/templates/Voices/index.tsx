import Image from "next/image"
import Title from "src/components/parts/Title"
import { galleryContents } from "src/contents/gallery"
import { Swiper, SwiperSlide } from "swiper/react"


const Voices = () => {
  return (
    <div>
      <Title h2="お客様の声" />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3
          }
        }}
      >
        {galleryContents && galleryContents.map(content => (
          <SwiperSlide key={content.id}>
            <Image
              src={content.src}
              width={600}
              height={400}
              alt={content.title}
            />
            <h3 className='text-lg text-accent'>{content.title}</h3>
            <div>{content.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Voices