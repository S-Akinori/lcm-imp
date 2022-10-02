import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TitleAndText from "src/components/parts/TitleAndText"
import ReviewPostBox from "src/components/templates/ReviewPostBox"
import { reviewText } from "src/contents/review"

const ReviewPage = () => {
  return (
    <Layout
      pageTitle="テンプレートのない結婚式ムービーのお客様の声"
      pageDescription="テンプレートのない結婚式ムービーを制作したお客様の声を集めました。わたしたちの作る結婚式ムービーをお楽しみください。"
      h1="テンプレートのない結婚式ムービーのお客様の声"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/hero-review.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/concept`}
    >
      <FV en="REVIEW" title="お客様の声" src="/images/hero-review.jpg" />
      <AnimationTrigger animation='bg-rect bg-rect--left active' rootMargin='-150px' triggerOnce>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <Container>
            <section className="py-14">
              <TitleAndText h2={reviewText.title}>{reviewText.text}</TitleAndText>
            </section>
          </Container>
        </AnimationTrigger>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container>
          <div className="md:flex flex-wrap">
            <div className="md:w-1/2">
              <ReviewPostBox imageSrc='/images/review/image_review1.jpg' title="映画のような引き込まれる世界観！" name="Hご夫妻 (兵庫県)" date="2022年9月23日" movieType="オープニングムービー">
                映画のような引き込まれる世界観で完成度の高いムービーを作って頂きました！スタッフさんも明るく楽しい撮影で、とてもいい思い出になりました✨
              </ReviewPostBox>
            </div>
          </div>
        </Container>
      </AnimationTrigger>
    </Layout>
  )
}

export default ReviewPage