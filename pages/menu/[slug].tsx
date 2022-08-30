import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Layout from "src/components/Layout"
import Button from "src/components/parts/Button"
import Container from "src/components/parts/Container"
import ImageGallery from "src/components/parts/ImageGallery"
import Label from "src/components/parts/Label"
import Video from "src/components/parts/Video"
import Menu from "src/components/templates/Menu"
import Voices from "src/components/templates/Voices"
import { menuArticles } from "src/contents/menu"

interface Props {
  menu: {
    id: string
    title: string
    slug: string
    category: string
    videoSrc: string
    thumbnail: {
      src: string
      width: string
      height: string
    }
    images: {
      id: string
      src: string
      alt: string
    }[],
    content: string
    price: string
    details: {
      id: string
      title: string
      content: string
    }[]
  }
}

const MenuDetailPage = ({menu}: Props) => {
  return (
    <Layout
      pageTitle={menu.title}
      pageDescription={menu.content}
      h1={menu.title}
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}${menu.thumbnail.src}`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/menu/${menu.slug}`}
    >
      <Container className="py-12 max-w-screen-lg">
        <h1 className="border-b border-b-accent">{menu.title}</h1>
        {/* <Video src={menu.videoSrc} /> */}
        <div className="text-center">
          <Image 
            src={menu.thumbnail.src}
            width={menu.thumbnail.width}
            height={menu.thumbnail.height}
            objectFit='cover'
          />
        </div>
        {/* <div>
          <ImageGallery images={menu.images} />
        </div> */}
        <div className="mb-8">
          <div className="mb-4 text-xl text-accent">{menu.price}</div>
          <div className=""><Button className="!bg-accent !text-accent-cont" href="/contact/order" query={{menuId: menu.id}}>このプランで問い合わせる</Button></div>
        </div>
        <div className="mb-8">
          <div className="whitespace-pre-wrap">{menu.content}</div>
        </div>
        <div className="mb-24">
          {menu.details && menu.details.map((detail) => (
            <div key={detail.id} className="md:flex items-start mb-8">
              <Label className="w-32 shrink-0">{detail.title}</Label>
              <div className="py-2 px-4 whitespace-pre-wrap"><div>{detail.content}</div></div>
            </div>
          ))}
        </div>
        {/* <div className="mb-20">
          <Voices />
        </div> */}
        <div>
          <Menu />
        </div>
      </Container>
    </Layout>
  )
}

export default MenuDetailPage

export const getStaticPaths: GetStaticPaths = async() => {
  // data will be fetched from Wordpress, Contentful or others
  // testing now
  const paths = menuArticles.map((article) => ({
    params: {slug: article.slug}
  }))

  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // data will be fetched from Wordpress, Contentful or others
  // testing now
  const menu = menuArticles.find(article => article.slug == params?.slug)
  console.log(menu);
  return {props: {menu}}
}