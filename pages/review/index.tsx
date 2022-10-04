import { RootQueryToPostReviewConnection } from "lib/generated/client"
import sdk from "lib/wpSdk"
import { GetStaticProps } from "next"
import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TitleAndText from "src/components/parts/TitleAndText"
import ReviewPostBox from "src/components/templates/ReviewPostBox"
import { reviewText } from "src/contents/review"

interface Props {
  posts: RootQueryToPostReviewConnection
}

const ReviewPage = ({posts}: Props) => {
  const {edges} = posts
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
            {edges && edges.map(edge => (
              <div key={edge?.node?.id} className="md:w-1/2">
                <ReviewPostBox 
                  imageSrc={edge.node.featuredImage?.node?.sourceUrl ? post?.featuredImage?.node?.sourceUrl  : '/images/no-image.jpg'} 
                  title={edge.node.title} 
                  name={edge.node.reviewField.name} 
                  date={edge.node.reviewField.date}
                  movieType={edge.node.reviewField.movieType}
                >
                  {edge.node.excerpt && <div dangerouslySetInnerHTML={{__html: edge.node.excerpt}} /> }
                </ReviewPostBox>
              </div>
            ))}
          </div>
        </Container>
      </AnimationTrigger>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await sdk.getReviewPosts();
  const posts = res.postReviews
  return {
    props: {
      posts
    }
  }
}

export default ReviewPage