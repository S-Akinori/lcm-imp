import removeTagsFromExcerpt from "lib/functions/removeTagsFromExcerpt"
import { PostReview } from "lib/generated/client"
import sdk from "lib/wpSdk"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Layout from "src/components/Layout"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import Container from "src/components/parts/Container"
import Video from "src/components/parts/Video"
import ReviewBox, { ReviewBoxList, ReviewBoxTitle } from "src/components/templates/ReviewBox"

const reviewListItems = [
  '満足している',
  'やや満足している',
  'どちらとも言えない',
  'あまり満足していない',
  '満足していない',
]

interface Props {
  post: PostReview
}

const ReviewSinglePage = ({post}: Props) => {
  let excerpt = ''
  if(post.excerpt) {
    excerpt = removeTagsFromExcerpt(post.excerpt)
  }
  return (
    <Layout
      pageTitle={post.title}
      pageDescription={excerpt}
      pageImg={post?.featuredImage?.node?.sourceUrl}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/reviews/${post.slug}`}
      h1=''
    >
      <Container className="pt-12">
        <div className="mx-auto max-w-screen-lg">
          <div className="review">
            <article>
              <div className="mb-4">
                <h1 className="text-center">{post.title}</h1>
                <div className="text-center">
                  <div>{post.reviewField?.movieType}</div>
                  <div>{post.reviewField?.name}</div>
                  <div>{post.reviewField?.date} 挙式</div>
                </div>
              </div>
              <div className="mb-8"><Video src={post.reviewField.videoUrl} /></div>
              <div className="flex">
                <div className="w-1/2 md:pr-4">
                  <Image
                    src={post.reviewField.image1.sourceUrl}
                    width={1080}
                    height={1080}
                    objectFit="cover"
                  />
                </div>
                <div className="w-1/2 md:pl-4">
                  <Image
                    src={post.reviewField.image2.sourceUrl}
                    width={1080}
                    height={1080}
                    objectFit="cover"
                  />
                </div>
              </div>
              <section>
                <h2>お客様アンケート回答</h2>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>撮影の満足度は？</ReviewBoxTitle>
                    <ReviewBoxList listItems={reviewListItems} markedIndex={post.reviewField.satisficationShoot} />
                  </ReviewBox>
                </div>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>ムービーの満足度は？</ReviewBoxTitle>
                    <ReviewBoxList listItems={reviewListItems} markedIndex={post.reviewField.satisficationMovie} />
                  </ReviewBox>
                </div>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>弊社を利用された感想を教えてください</ReviewBoxTitle>
                    <div className="py-4">{post.reviewField.reviewAll}</div>
                  </ReviewBox>
                </div>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>ムービー上映後、周りからどんな反応がありましまか？</ReviewBoxTitle>
                    <div className="py-4">{post.reviewField.reviewMovie}</div>
                  </ReviewBox>
                </div>
              </section>
              <section>
                <h2>スタッフからのメッセージ</h2>
                {post.content && <div dangerouslySetInnerHTML={{__html: post.content}}></div>}
              </section>
              <div className="text-center"><Button href="/review">お客様の声一覧へ</Button></div>
            </article>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await sdk.getReviewPosts();
  const posts = res.postReviews;
  const edges = posts?.edges
  if(edges) {
    const paths = edges.map(edge => ({
      params: {slug: edge?.node?.slug as string}
    }))
    return {paths, fallback: false}
  } else {
    return {paths: [], fallback: false}
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const res = await sdk.getReviewPost({id: params?.slug as string});
  const post = res.postReview
  return {
    props: {
      post,
    }
  }
}

export default ReviewSinglePage