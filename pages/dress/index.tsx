import { Modal } from "@mui/material"
import { fetchAPI } from "lib/fetchAPI"
import { GetStaticProps } from "next"
import Image from "next/image"
import { useRef, useState } from "react"
import Layout from "src/components/Layout"
import Accordion, { AccordionItem } from "src/components/parts/Accordion"
import CircleBackground from "src/components/parts/Animation/CircleBackground"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import ButtonRounded from "src/components/parts/Button/ButtonRounded"
import Container from "src/components/parts/Container"
import Flow, { FlowItem } from "src/components/parts/Flow"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import Title from "src/components/parts/Title"
import TitleAndText from "src/components/parts/TitleAndText"
import DressSwiper from "src/components/templates/DressSwiper"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { baseDressSize, blouseSize, colorKimonoGallery, dressFAQ, dressFeature, dressFlow, dressGallery, earringGallery, headAccessoriesGallery, kimonoAccessoriesGallery, mensKimonoGallery, simpleDressGallery, skirtSize, subDressText, tuxedoGallery, volumeDressGallery, whiteKimonoGallery } from "src/contents/dress"
import { ConceptMain, ConceptText } from "src/types/ConceptText"

interface DressGalleryContentProps {
  id: string;
  title: string;
  images: DressGalleryContentImage[];
}

interface DressGalleryContentImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const DressPage = () => {
  const [galleryImages, setGalleryImages] = useState<DressGalleryContentImage[] | null>(null);
  const ref = useRef(null)
  const onClick = (content: DressGalleryContentProps) => {
    setGalleryImages(content.images)
  }
  return (
    <Layout
      pageTitle="ドレスレンタルについて"
      pageDescription="結婚式ムービーの撮影用ドレスレンタルを行っています。ご自身で準備する手間が省けます。郵送でドレスのレンタルができて試着も可能です。"
      h1="結婚式ムービードレスレンタル"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/dress.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/dress`}
    >
      <FV en="DRESS" title="ドレスレンタル" src="/images/dress.jpg" />
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <CircleBackground width={200}>
            <section>
              <TitleAndText h2={subDressText.h2}>{subDressText.text}</TitleAndText>
            </section>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <CircleBackground width={200} threshold={0.8} md={{position: {right: '0', left: 'auto', top: 'auto', bottom: '-100px'}, width: 300}}>
            <section>
              <Title h2={dressFeature.title} />
              <div className="md:flex items-stretch">
                {dressFeature.contents.map(content => (
                  <div key={content.id} className="md:w-1/3 py-4 md:px-4">
                    <Box key={content.id} className="h-full">
                      <h3 className="text-accent">{content.title}</h3>
                      <p className="whitespace-pre-wrap">{content.text}</p>
                    </Box>
                  </div>
                ))}
              </div>
            </section>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <section>
            <Title h2={dressFlow.title} />
            <Flow>
              {dressFlow.contents.map(content => (
                <FlowItem key={content.id} image={content.image} className="w-full md:w-1/5">
                  <h3 className="mb-0">{content.title}</h3>
                  <div>{content.text}</div>
                </FlowItem>
              ))}
            </Flow>
          </section>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <CircleBackground width={200}>
            <section>
              <Title h2={dressFAQ.title} />
              <Accordion>
                {dressFAQ.contents.map(content => (
                  <AccordionItem key={content.id} title={content.title}>
                    {content.text}
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <section>
            <Title h2="ドレスの対応サイズについて" />
            <div className="mb-8">
              <div>ベースドレスの対応サイズ</div>
              <div className="md:flex">
                <div className="border flex items-center justify-center shrink-0 p-4 whitespace-pre-wrap text-center">{baseDressSize.title}</div>
                <div className="flex w-full">
                  {baseDressSize.contents.map(content => (
                    <div key={content.id} className="border w-1/3 md:w-auto">
                      <div className="bg-main p-2 text-center">{content.title}</div>
                      <div className="p-2 text-center">{content.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div>ブラウスの対応サイズ</div>
              <div className="text-xs">＊デザインにより詳細サイズは異なります</div>
              <div className="md:flex">
                <div className="border flex items-center justify-center shrink-0 p-4 whitespace-pre-wrap text-center">{blouseSize.title}</div>
                <div className="flex flex-wrap w-full">
                  {blouseSize.contents.map(content => (
                    <div key={content.id} className="border w-1/3 md:w-auto">
                      <div className="bg-main p-2 text-center">{content.title}</div>
                      <div className="p-2 text-center">{content.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>スカートの対応サイズ</div>
              <div className="text-xs">＊デザインにより詳細サイズは異なります</div>
              <div className="md:flex">
                <div className="border flex items-center justify-center shrink-0 p-4 whitespace-pre-wrap text-center">{skirtSize.title}</div>
                <div className="flex flex-wrap w-full">
                  {skirtSize.contents.map(content => (
                    <div key={content.id} className="border w-1/2 md:w-auto">
                      <div className="bg-main p-2 text-center">{content.title}</div>
                      <div className="p-2 text-center">{content.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <section>
            <Title h2={dressGallery.title} />
            <div>{dressGallery.text}</div>
            <div className="flex flex-wrap">
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#simpleDressGallery">{simpleDressGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#volumeDressGallery">{volumeDressGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#headAccessoriesGallery">{headAccessoriesGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#earringGallery">{earringGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#tuxedoGallery">{tuxedoGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#whiteKimonoGallery">{whiteKimonoGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#colorKimonoGallery">{colorKimonoGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#mensKimonoGallery">{mensKimonoGallery.title}</ButtonRounded></div>
              <div className="p-4 w-full md:w-1/3"><ButtonRounded className="w-full" href="#kimonoAccessoriesGallery">{kimonoAccessoriesGallery.title}</ButtonRounded></div>
            </div>
            <div id="simpleDressGallery" className="py-6">
              <h3 className="mb-0">{simpleDressGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {simpleDressGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="volumeDressGallery" className="py-6">
              <h3 className="mb-0">{volumeDressGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {volumeDressGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="headAccessoriesGallery" className="py-6">
              <h3 className="mb-0">{headAccessoriesGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {headAccessoriesGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="earringGallery" className="py-6">
              <h3 className="mb-0">{earringGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {earringGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="tuxedoGallery" className="py-6">
              <h3 className="mb-0">{tuxedoGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {tuxedoGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="whiteKimonoGallery" className="py-6">
              <h3 className="mb-0">{whiteKimonoGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {whiteKimonoGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="colorKimonoGallery" className="py-6">
              <h3 className="mb-0">{colorKimonoGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {colorKimonoGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="mensKimonoGallery" className="py-6">
              <h3 className="mb-0">{mensKimonoGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {mensKimonoGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="kimonoAccessoriesGallery" className="py-6">
              <h3 className="mb-0">{kimonoAccessoriesGallery.title}</h3>
              <div className="text-sm mb-4">写真をクリックすると拡大表示されます</div>
              <div className="flex flex-wrap">
                {kimonoAccessoriesGallery.contents.map(content => (
                  <div key={content.id} className="w-1/2 md:w-1/3 p-2 md:p-4">
                    <div>{content.title}</div>
                    <div className="cursor-pointer duration-300 hover:opacity-80" onClick={(e) => onClick(content)}>
                      <Image src={content.images[0].url} width={content.images[0].width} height={content.images[0].height} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </AnimationTrigger>
      {galleryImages && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 bg-black opacity-70 w-full h-full" onClick={(e) => setGalleryImages(null)}></div>
          <DressSwiper images={galleryImages} />
        </div>
      )}
    </Layout>
  )
}

export default DressPage