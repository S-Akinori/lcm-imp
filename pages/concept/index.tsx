import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import TitleAndText from "src/components/parts/TitleAndText"
import { subConceptMessages, subConceptText } from "src/contents/concept"

const ConceptPage = () => {
  return (
    <>
      <Layout>
        <FV en="CONCEPT" title="コンセプト" src="/images/concept.jpg" />
        <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
          <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
            <Container>
              <section className="py-14">
                <TitleAndText h2={subConceptText.h2}>{subConceptText.text}</TitleAndText>
              </section>
            </Container>
          </AnimationTrigger>
        </AnimationTrigger>
        <Container>
          {subConceptMessages && subConceptMessages.map((message, index)=> (
            <AnimationTrigger key={message.id} animation='fadeInBottom' startClass='opacity-0' rootMargin='-100px' triggerOnce>
              <section className="py-12">
                <TextAndImage
                  src={message.src}
                  alt={message.title}
                  width={600}
                  height={400}
                  col={2}
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

export default ConceptPage