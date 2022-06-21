import Image from "next/image"
import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TitleAndText from "src/components/parts/TitleAndText"
import { flowContents, subFlowText } from "src/contents/flow"

const FlowPage = () => {
  return(
    <Layout>
      <FV en="FLOW" title="制作の流れ" src="/images/flow.jpg" />
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <Container>
            <section className="py-14">
              <TitleAndText h2={subFlowText.h2}>{subFlowText.text}</TitleAndText>
            </section>
          </Container>
        </AnimationTrigger>
      </AnimationTrigger>
      <Container className="py-12">
        <div>
          {flowContents && flowContents.map(flow => (
            <AnimationTrigger key={flow.id} animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
              <div className='relative mb-24'>
                <div className='absolute left-0 -top-8 text-accent'>{flow.label}</div>
                <Box className='md:flex'>
                  <div className='p-4 md:w-80 shrink-0'>
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
                    {flow.notes && <div className='mt-4 whitespace-pre-wrap text-sm'>{flow.notes}</div>}
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
export default FlowPage