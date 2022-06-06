import type { NextPage } from 'next'
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
import 'swiper/css';
import { flowContents, topFlowText } from 'src/contents/flow'
import Flex from 'src/components/parts/Flex'
import { newsContents, topNewsText } from 'src/contents/news'
import Link from 'next/link'
import { contactContents, topContactText } from 'src/contents/contact'
import AnimationTrigger from 'src/components/parts/AnimationTrigger'
import PageLoading from 'src/components/parts/PageLoading'
import Box from 'src/components/parts/Box'

const Home: NextPage = () => {
  return (
    <Layout>
      <PageLoading />
      <MV src='/videos/mv.mp4' title={`世界にたったひとつだけの\nウェディングムービー`} text="結婚式ムービーの「RING RING」" />
      <AnimationTrigger animation='bg-rect active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-28'>
            <Container>
              <TextAndImage
                src='/images/concept.jpg'
                alt={conceptData.h2}
                col={2}
              >
                <Title en={conceptData.en} h2={conceptData.h2} />
                <div className='text'>{conceptData.text}</div>
              </TextAndImage>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <section className='relative py-14 md:py-28'>
          <Container>
              <Title en={topMenuText.en} h2={topMenuText.h2} />
              <div className='text'>{topMenuText.text}</div>
          </Container>
          <div>
            {menus && menus.map((menu, index) => (
              <TextAndVideo
                src={menu.src}
                key={menu.id}
                rtl={index % 2 == 0 ? true : false}
              >
                <div className='p-4 md:p-0'>
                  <h3 className='pb-0'>{menu.title}</h3>
                  <div className='mb-4'>{menu.price}</div>
                  <div>{menu.text}</div>
                  <div className='mt-12'><Button href={menu.link}>詳細を見る</Button></div>
                </div>
              </TextAndVideo>
            ))}
          </div>
        </section>
      </AnimationTrigger>
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-28'>
            <Container>
              <div className='md:flex'>
                <div className='mb-12 md:w-1/3'>
                  <Title en={topGalleryText.en} h2={topGalleryText.h2} />
                  <div className='text'>{topGalleryText.text}</div>
                  <div className='mt-12'><Button href={topGalleryText.href}>{topGalleryText.linkText}</Button></div>
                </div>
                <div className='md:w-2/3 md:pl-16'>
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      768: {
                        slidesPerView: 1.5
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
              </div>
            </Container>
          </section>
        </AnimationTrigger>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <section className='py-14 md:py-28'>
          <Container>
            <div>
              <Title en={topFlowText.en} h2={topFlowText.h2} />
            </div>
            <div>
              {flowContents && flowContents.map(flow => (
                <div key={flow.id} className='relative my-24'>
                  <div className='absolute left-0 -top-8 text-accent'>{flow.label}</div>
                  <Box className='md:flex'>
                    <div className='p-4 md:w-60 shrink-0'>
                      <Image 
                        src={flow.src}
                        width={600}
                        height={400}
                        alt={flow.title}
                      />
                    </div>
                    <div className='p-4'>
                      <div className='text-accent text-lg'>{flow.title}</div>
                      <div className='whitespace-pre-wrap'>{flow.text}</div>
                    </div>
                  </Box>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </AnimationTrigger>
      <AnimationTrigger animation='bg-rect active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-28'>
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
      </AnimationTrigger>
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <section className='py-14 md:py-28'>
            <Container>
              <Flex>
                <div className='md:w-2/3'>
                  <Title en={topContactText.en} h2={topContactText.h2} />
                  <div className='text'>{topContactText.text}</div>
                </div>
                <div className='md:w-1/3'>
                  {contactContents && contactContents.map(contact => (
                    <div key={contact.id} className="mb-8"><Button href={contact.href}>{contact.linkText}</Button></div>
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

export default Home
