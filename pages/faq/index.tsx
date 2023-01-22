import { fetchAPI } from "lib/fetchAPI"
import { GetStaticProps } from "next"
import Layout from "src/components/Layout"
import Accordion, { AccordionItem } from "src/components/parts/Accordion"
import CircleBackground from "src/components/parts/Animation/CircleBackground"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import TitleAndText from "src/components/parts/TitleAndText"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { faqs, subFAQText } from "src/contents/faq"
import { ConceptMain, ConceptText } from "src/types/ConceptText"

const ConceptPage = () => {
  return (
    <>
      <Layout
        pageTitle="よくある質問"
        pageDescription="ロケーション撮影による前撮り、結婚式ムービー制作のよくある質問にお答えしています。不安な点などはまずはこちらで確認してください。"
        h1="ロケーション前撮りムービー制作についてのご質問"
        pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/faq.jpg`}
        pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/faq`}
      >
        <FV en="FAQ" title="よくある質問" src="/images/faq.jpg" />
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <Container className="mt-24 mb-12">
            <CircleBackground width={200}>
              <section>
                <TitleAndText h2={subFAQText.h2}>{subFAQText.text}</TitleAndText>
              </section>
            </CircleBackground>
          </Container>
        </AnimationTrigger>
        <Container>
          <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
            <Accordion>
              {faqs.map(faq => (
                <AccordionItem key={faq.id} title={faq.question}>
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </AnimationTrigger>
        </Container>
      </Layout>
    </>
  )
}

export default ConceptPage