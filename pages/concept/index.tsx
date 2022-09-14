import { fetchAPI } from "lib/fetchAPI"
import { GetStaticProps } from "next"
import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import TitleAndText from "src/components/parts/TitleAndText"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { ConceptText } from "src/types/ConceptText"

interface Props {
  conceptText: ConceptText
}

const ConceptPage = ({conceptText}: Props) => {
  return (
    <>
      <Layout
        pageTitle="コンセプト"
        pageDescription="結婚式ムービーをロケーション撮影やドローンを使い作成します。テンプレートのないプロフィールムービーやオープニングムービーを作るので自分だけのムービーが作れます。"
        h1="テンプレートを使わないおしゃれな結婚式ムービーを制作"
        pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/concept.jpg`}
        pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/concept`}
      >
        <FV en="CONCEPT" title="コンセプト" src="/images/concept.jpg" />
        <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
          <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
            <Container>
              <section className="py-14">
                <TitleAndText h2={conceptText.object.title}>{conceptText.object.text}</TitleAndText>
              </section>
            </Container>
          </AnimationTrigger>
        </AnimationTrigger>
        <Container>
          {subConceptMessages && subConceptMessages.map((message, index)=> (
            <AnimationTrigger key={message.id} animation='fadeInBottom' startClass='opacity-0' rootMargin='-100px' triggerOnce>
              <section className="py-4 md:py-12">
                <TextAndImage
                  src={message.src}
                  alt={message.title}
                  col={2}
                  width={800}
                  height={400}
                  rtl={index % 2 !== 0 ? true : false}
                  ttb
                  classNames={{TextAndImage__image: 'bg-mage'}}
                >
                  <h3 className="title-border-b">{message.title}</h3>
                  <div className="whitespace-pre-wrap">{message.text}</div>
                </TextAndImage>
              </section>
            </AnimationTrigger>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const conceptText: ConceptText = await fetchAPI('admin/content/bMQvHyXN94cEQWR7Kkm2');
  return {
    props: {
      conceptText
    }
  }
}

export default ConceptPage