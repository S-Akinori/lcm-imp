import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import MV from 'src/components/parts/MV'
import Title from 'src/components/parts/Title'
import Layout from '../src/components/Layout'
import { conceptData } from 'src/contents/concept'
import TextAndImage from 'src/components/parts/TextAndImage'
import Container from 'src/components/parts/Container'
import { menus, topMenuText } from 'src/contents/menu'
import TextAndVideo from 'src/components/parts/TextAndVideo'
import Button from 'src/components/parts/Button'
import { galleryContents, topGalleryText } from 'src/contents/gallery'
import {Swiper, SwiperSlide} from 'swiper/react'
import { flowContents, topFlowText } from 'src/contents/flow'
import Flex from 'src/components/parts/Flex'
import { newsContents, topNewsText } from 'src/contents/news'
import Link from 'next/link'
import { contactContents, topContactText } from 'src/contents/contact'
import AnimationTrigger from 'src/components/parts/AnimationTrigger'
import PageLoading from 'src/components/parts/PageLoading'
import Box from 'src/components/parts/Box'
import GalleryBox from 'src/components/parts/Gallery/GalleryBox'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TextAndImageOver from 'src/components/parts/TextAndImage/TextAndImageOver'
import { ConceptTop, ConceptTopContent } from 'src/types/Concept'
import { fetchAPI } from 'lib/fetchAPI'
import { MenuTop } from 'src/types/Menu'
import { FlowTop } from 'src/types/Flow'
import { ContactTop } from 'src/types/Contact'

interface Props {
  conceptTop: ConceptTopContent
  menuTop: MenuTop
  flowTop: FlowTop
  contactTop: ContactTop
}

const Home = ({conceptTop, menuTop, flowTop, contactTop}: Props) => {
  return (
    <Layout
      h1={process.env.NEXT_PUBLIC_SITE_NAME}
    >
      <PageLoading />
      <MV src='/videos/top.mp4' title={`世界にたったひとつの\nウェディングムービー`} text="結婚式ムービーの「Ring Ring」" />
      <AnimationTrigger animation='bg-rect active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-24'>
            <Container>
              <TextAndImage
                src={conceptTop.image.url}
                alt={conceptTop.titleJa}
                width={conceptTop.image.width}
                height={conceptTop.image.height}
                col={2}
              >
                <Title en={conceptTop.titleEn} h2={conceptTop.titleJa} />
                <div className='text'>{conceptTop.text}</div>
                <div className='px-4'><Button href={conceptTop.href}>{conceptTop.linkText}</Button></div>
              </TextAndImage>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger>
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='relative py-14 md:py-20'>
            <Container>
                <Title en={menuTop.titleEn} h2={menuTop.titleJa} />
                <div className='text'>{menuTop.text}</div>
            </Container>
            {/* <div className='mt-8'>
              {menus && menus.map((menu, index) => (
                (menu.isTop && (
                <TextAndImageOver
                  src={menu.src}
                  image={menu.thumbnail}
                  key={menu.id}
                  rtl={index % 2 == 0 ? true : false}
                  className="mb-24 md:mb-32"
                >
                  <div>
                    <h3 className='pb-0 mb-0 text-accent'>{menu.title}</h3>
                    <div className='mb-4'>{menu.price}</div>
                    <div>{menu.text}</div>
                    <div className='mt-12'><Button href={menu.link}>詳細を見る</Button></div>
                  </div>
                </TextAndImageOver>
                ))
              ))}
            </div> */}
            <Container>
              <div><Button href={menuTop.href}>{menuTop.linkText}</Button></div>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger>
      {/* <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-20'>
            <Container>
              <div className='md:flex'>
                <div className='mb-12 md:w-1/3'>
                  <Title en={topGalleryText.en} h2={topGalleryText.h2} />
                  <div className='text'>{topGalleryText.text}</div>
                  <div className='mt-12'><Button href={topGalleryText.href}>{topGalleryText.linkText}</Button></div>
                </div>
                <div className='md:w-2/3 md:pl-16'>
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false
                    }}
                    navigation={{
                      nextEl: '.custom-swiper-next-button',
                      prevEl: '.custom-swiper-prev-button',
                    }}
                    pagination={{
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet custom-swiper-bullet--main',
                      bulletActiveClass: 'swiper-pagination-bullet, custom-swiper-bullet--accent'
                    }}
                    breakpoints={{
                      768: {
                        slidesPerView: 1.2,
                      },
                      1024: {
                        slidesPerView: 1.5,
                      },
                      1280: {
                        slidesPerView: 2,
                      }
                    }}
                    onSwiper={swiper => console.log(swiper)}
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
              </div>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger> */}
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <section className='py-14 md:py-20'>
          <Container>
            <div>
              <Title en={flowTop.titleEn} h2={flowTop.titleJa} />
            </div>
            <div>
              {flowTop.fieldset && flowTop.fieldset.map((flow, index) => (
                <div key={index} className={`relative ${index !== flowTop.fieldset.length - 1 ? 'my-24' : ''}`}>
                  <div className='absolute left-0 -top-8 text-accent'>{flow.label}</div>
                  <Box>
                    <div className='md:flex'>
                      <div className='p-4 md:w-80 shrink-0'>
                        <Image 
                          src={flow.image.url}
                          width={flow.image.width}
                          height={flow.image.height}
                          alt={flow.title}
                        />
                      </div>
                      <div className='p-4'>
                        <div className='text-accent text-lg'>{flow.title}</div>
                        <div className='whitespace-pre-wrap'>{flow.text}</div>
                        {/* {flow.notes && <div className='mt-4 whitespace-pre-wrap text-sm'>{flow.notes}</div>} */}
                      </div>
                    </div>
                  </Box>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </AnimationTrigger>
      {/* <AnimationTrigger animation='bg-rect active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-20'>
            <Container>
              <Flex>
                <div className='md:w-1/3 lg:w-1/4'>
                  <Title en={topNewsText.en} h2={topNewsText.h2} />
                </div>
                <ul className='md:w-2/3 lg:w-3/4'>
                  {newsContents && newsContents.map(news => (
                    <li key={news.id} className="py-2 mb-2">
                      <Link href={news.href}><a className='flex flex-col md:flex-row md:justify-start'><span className='mr-4 lg:mr-8'>{news.date}</span><span>{news.title}</span></a></Link>
                    </li>
                  ))}
                </ul>
              </Flex>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger> */}
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-20'>
            <Container>
              <Flex>
                <div className='md:w-2/3'>
                  <Title en={contactTop.titleEn} h2={contactTop.titleJa} />
                  <div className='text'>{contactTop.text}</div>
                </div>
                <div className='md:w-1/3'>
                  {contactTop.fieldset && contactTop.fieldset.map((contact, index) => (
                    <div key={index} className="mb-8"><Button href={contact.href}>{contact.linkText}</Button></div>
                  ))}
                </div>
              </Flex>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const conceptTop = await fetchAPI<ConceptTopContent>('admin/content/etzOoIxcQkqwqviTHU5Z');
  const menuTop = await fetchAPI<MenuTop>('admin/content/8rB6ZflhMCS1XCRhxqJx')
  const flowTop = await fetchAPI<FlowTop>('admin/content/S5CiokTIYvwZGsVpKLYS')
  const contactTop = await fetchAPI<ContactTop>('admin/content/wxOHDpxRaQCual4NUZr7')

  return {
    props: {
      conceptTop,
      menuTop,
      flowTop,
      contactTop
    }
  }
}

export default Home
