import { fetchAPI } from "lib/fetchAPI"
import { GetStaticProps } from "next"
import Image from "next/image"
import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TitleAndText from "src/components/parts/TitleAndText"
import { flowContents, subFlowText } from "src/contents/flow"
import { FlowText, FlowTop } from "src/types/Flow"

interface Props {
  flowText: FlowText
  flow: FlowTop
}
const FlowPage = ({flowText, flow}: Props) => {
  return(
    <Layout
      pageTitle="制作の流れ"
      pageDescription="テンプレートがないので企画から相談しつつ進めていきます。ロケーション撮影、ドローン撮影も行うので新郎新婦様の思い出の場所で最高のウェディングムービーを作りましょう。"
      h1="結婚式でおしゃれなプロフィールムービーを作るまでの流れ"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/flow.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/flow`}
    >
      <FV en="FLOW" title="制作の流れ" src="/images/flow.jpg" />
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <Container>
            <section className="py-14">
              <TitleAndText h2={flowText.title}>{flowText.text}</TitleAndText>
            </section>
          </Container>
        </AnimationTrigger>
      </AnimationTrigger>
      <Container className="py-12">
        <div>
          {flow.fieldset && flow.fieldset.map((flow, index) => (
            <AnimationTrigger key={index} animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
              <div className='relative mb-24'>
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
            </AnimationTrigger>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const flowText = await fetchAPI<FlowText>('admin/content/KRGYdGKZ1BbEKEz0RmWr');
  const flow = await fetchAPI<FlowTop>('admin/content/S5CiokTIYvwZGsVpKLYS');
  return {
    props: {
      flowText,
      flow
    }
  }
}

export default FlowPage