import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import Layout from "src/components/Layout"
import Button from "src/components/parts/Button"
import Container from "src/components/parts/Container"
import ImageGallery from "src/components/parts/ImageGallery"
import Label from "src/components/parts/Label"
import Video from "src/components/parts/Video"
import Menu from "src/components/templates/Menu"
import Voices from "src/components/templates/Voices"
import { menuArticles } from "src/contents/menu"
import { newsArticles, newsContents } from "src/contents/news"

interface Props {
  news: {
    id: string
    title: string
    slug: string
    thumbmail: string
    content: string
  }
}

const NewsDetailPage = ({news}: Props) => {
  return (
    <Layout>
      <Container className="py-12 max-w-screen-lg">
        <h1 className="border-b border-b-accent">{news.title}</h1>
        <div className="mb-8">
          <Image
            src={news.thumbmail}
            width={1280}
            height={800}
            alt={news.title}
          />
        </div>
        <div>{news.content}</div>
        <div className="mt-8 text-center"><Button href="/news">お知らせ一覧へ</Button></div>
      </Container>
    </Layout>
  )
}

export default NewsDetailPage

export const getStaticPaths: GetStaticPaths = async() => {
  // data will be fetched from Wordpress, Contentful or others
  // testing now
  const paths = newsArticles.map((article) => ({
    params: {slug: article.slug}
  }))

  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // data will be fetched from Wordpress, Contentful or others
  // testing now
  const news = newsArticles.find(article => article.slug == params?.slug)
  return {props: {news}}
}