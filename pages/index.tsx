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
import PageLoading, { PageLoadingWithImages } from 'src/components/parts/PageLoading'
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
import Menu from 'src/components/templates/Menu'
import CircleBackground from 'src/components/parts/Animation/CircleBackground'
import { topReviewText } from 'src/contents/review'
import sdk from 'lib/wpSdk'
import { RootQueryToPostReviewConnection } from 'lib/generated/client'
import ReviewPostBox from 'src/components/templates/ReviewPostBox'
import { useContext } from 'react'
import { visitContext } from './_app'

interface Props {
  reviews: RootQueryToPostReviewConnection
}

const Home = ({reviews}: Props) => {
  const {visited, setVisited} = useContext(visitContext);
  return (
    <Layout
      h1={process.env.NEXT_PUBLIC_SITE_NAME}
    >
      <PageLoadingWithImages />
      <MV src='/videos/top.mp4' title={`世界にたったひとつの\nウェディングムービー`} text="結婚式ムービーの「Ring Ring」" />
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className='my-24'>
          <CircleBackground>
            <section>
              <TextAndImage
                src={conceptData.image.url}
                alt={conceptData.h2}
                width={conceptData.image.width}
                height={conceptData.image.height}
                col={2}
              >
                <Title en={conceptData.en} h2={conceptData.h2} />
                <div className='text'>{conceptData.text}</div>
                <div className='px-4'><Button href={conceptData.href}>{conceptData.linkText}</Button></div>
              </TextAndImage>
            </section>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className='my-24'>
          <section>
            <CircleBackground width={250} md={{position: {right: '0', left: 'auto'}, width: 400}}>
              <Title en={topMenuText.en} h2={topMenuText.h2} />
              <div className='text'>{topMenuText.text}</div>
              <Menu isButton={false} />
              <div className='text-center'><Button href={topMenuText.href}>{topMenuText.linkText}</Button></div>
            </CircleBackground>
          </section>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className='my-24'>
          <section>
            <CircleBackground>
                <div className='md:flex'>
                  <div className='mb-12 md:w-1/3'>
                    <Title en={topReviewText.en} h2={topReviewText.h2} />
                    <div className='text'>{topReviewText.text}</div>
                    <div className='mt-12'><Button href={topReviewText.href}>{topReviewText.linkText}</Button></div>
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
                      {reviews.edges && reviews.edges.map(edge => (
                        <SwiperSlide key={edge.node.id}>
                          {/* <GalleryBox 
                          src={edge.node.featuredImage?.node?.sourceUrl ? edge.node.featuredImage?.node?.sourceUrl  : '/images/no-image.jpg'} 
                          date={edge.node.reviewField.date}
                          info={content.info} href={content.href} title={content.title} text={content.text} /> */}
                          <ReviewPostBox
                            slug={edge.node.slug}
                            imageSrc={edge.node.featuredImage?.node?.sourceUrl ? edge.node.featuredImage?.node?.sourceUrl  : '/images/no-image.jpg'} 
                            title={edge.node.title} 
                            name={edge.node.reviewField.name} 
                            date={edge.node.reviewField.date}
                            movieType={edge.node.reviewField.movieType}
                          >
                            {edge.node.excerpt && <div dangerouslySetInnerHTML={{__html: edge.node.excerpt}} /> }
                          </ReviewPostBox>
                        </SwiperSlide>
                      ))}
                      <div className="top-auto bottom-4 md:-bottom-2 custom-swiper-next-button custom-swiper-next-button--base-cont font_en">next</div>
                      <div className="top-auto bottom-4 md:-bottom-2 custom-swiper-prev-button custom-swiper-prev-button--base-cont font_en">prev</div>
                    </Swiper>
                  </div>
                </div>
            </CircleBackground>
          </section>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className='my-24'>
          <CircleBackground threshold={0.1} width={250} md={{position: {right: '0', left: 'auto'}, width: 400}}>
            <section>
              <div>
                <Title en={topFlowText.en} h2={topFlowText.h2} />
              </div>
              <div>
                {flowContents && flowContents.map((flow, index) => (
                  <div key={index} className={`relative ${index !== flowContents.length - 1 ? 'my-24' : ''}`}>
                    <div className='absolute left-0 -top-8 text-accent'>{flow.label}</div>
                    <Box>
                      <div className='md:flex'>
                        <div className='md:pr-2 md:w-80 shrink-0'>
                          <Image 
                            src={flow.image.url}
                            width={flow.image.width}
                            height={flow.image.height}
                            alt={flow.title}
                          />
                        </div>
                        <div className='md:pl-2'>
                          <div className='text-accent text-lg'>{flow.title}</div>
                          <div className='whitespace-pre-wrap'>{flow.text}</div>
                          {/* {flow.notes && <div className='mt-4 whitespace-pre-wrap text-sm'>{flow.notes}</div>} */}
                        </div>
                      </div>
                    </Box>
                  </div>
                ))}
              </div>
            </section>
          </CircleBackground>
        </Container>
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
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className='my-24'>
          <CircleBackground md={{position: {top: '-50px', right: '100px'}, width: 300}}>
            <section>
                <Flex>
                  <div className='md:w-2/3'>
                    <Title en={topContactText.en} h2={topContactText.h2} />
                    <div className='text'>{topContactText.text}</div>
                  </div>
                  <div className='md:w-1/3'>
                    {contactContents && contactContents.map((contact, index) => (
                      <div key={index} className="mb-8"><Button href={contact.href}>{contact.linkText}</Button></div>
                    ))}
                  </div>
                </Flex>
            </section>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await sdk.getReviewPosts();
  const reviews = res.postReviews
  return {
    props: {
      reviews
    }
  }
}

export default Home
