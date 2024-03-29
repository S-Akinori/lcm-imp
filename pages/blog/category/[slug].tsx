import { GetStaticPaths, GetStaticProps } from "next"
import Layout from "src/components/Layout"
import FV from "src/components/parts/FV"
import { Category, MenuToMenuItemConnection, RootQueryToCategoryConnection, RootQueryToPostConnection } from "lib/generated/client";
import Image from "next/image";
import Link from "next/link";
import Container from "src/components/parts/Container";
import sdk from "lib/wpSdk";

interface Props {
  category: Category
  posts: RootQueryToPostConnection
  categories: RootQueryToCategoryConnection
  pickedOutPosts: MenuToMenuItemConnection
}

const BlogIndexByCategoryPage = ({category, posts, categories, pickedOutPosts}: Props) => {
  const {edges} = posts
  const categoryEdges = categories.edges
  const pickedOutPostsEdges = pickedOutPosts.edges
  return (
    <Layout
      pageTitle={"ブログ" + category.name}
      pageDescription="結婚式に関する情報をお送りしてます。プロフィールムービー制作を含め、結婚式準備に有益な記事を書いていきます"
      h1={"結婚式ムービーのブログカテゴリー: " + category.name}
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/fv-blog.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/blog`}
      noindex
    >
      <FV en="BLOG" title={category.name} src="/images/fv-blog.jpg" />
      <Container className="py-8">
        <div className="md:flex">
          <div className="md:flex flex-wrap md:w-2/3">
            {edges && edges.map(item => (
              <div key={item?.node?.id} className="py-8 mb-4 border-b border-b-accent md:p-4 lg:w-1/2">
                <div>
                  <Link href={'/blog/' + item?.node?.slug as string}>
                    <a className="block">
                      <Image
                        src={item?.node?.featuredImage?.node?.sourceUrl ? item?.node?.featuredImage?.node?.sourceUrl  : '/images/no-image.jpg'}
                        width={1200}
                        height={800}
                        objectFit="cover"
                        alt={item?.node?.title as string}
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <h2 className="mb-2"><Link href={'/blog/' + item?.node?.slug as string}>{item?.node?.title}</Link></h2>
                  {item?.node?.excerpt && <div dangerouslySetInnerHTML={{__html: item?.node?.excerpt}}></div>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 md:w-1/3 md:pl-8">
            <aside className="sidebar">
              <div className="mb-8">
                <h4>
                  <span className="font_en text-3xl">Category</span><br />
                  カテゴリー
                </h4>
                <ul className="categoryList">
                  {categoryEdges && categoryEdges.map(edge => (
                    <li key={edge?.node?.id}><Link href={'/blog/category/' + edge?.node?.slug}>{edge?.node?.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>
                  <span className="font_en text-3xl">Picks</span><br />
                  オススメ記事
                </h4>
                <div>
                  {pickedOutPostsEdges && pickedOutPostsEdges.map(edge => (
                    <div key={edge?.node?.connectedNode?.node?.id} className="mb-8">
                      <div>
                        <Link href={'/blog/' + edge?.node?.connectedNode?.node?.slug}>
                          <a>
                            <Image
                              src={edge?.node?.connectedNode?.node?.featuredImage?.node.sourceUrl ? edge?.node?.connectedNode?.node?.featuredImage?.node.sourceUrl : '/images/no-image.jpg'}
                              width={1200}
                              height={800}
                              objectFit="cover"
                            />
                          </a>
                        </Link>
                      </div>
                      <div>
                        <div><Link href={'/blog/' + edge?.node?.connectedNode?.node?.slug}>{edge?.node?.connectedNode?.node?.title}</Link></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await sdk.getCategories();
  const posts = res.categories;
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
  const res = await sdk.getCategoryWithPosts({id: params?.slug as string});
  const resCategories = await sdk.getCategories();
  const resPickedOutPosts = await sdk.getPickedOutPosts();
  const category = res.category
  const posts = res.category?.posts
  const categories = resCategories.categories
  const pickedOutPosts = resPickedOutPosts.menu?.menuItems
  return {
    props: {
      category,
      posts,
      categories,
      pickedOutPosts
    }
  }
}

export default BlogIndexByCategoryPage