import { GetStaticPaths, GetStaticProps } from "next"
import Layout from "src/components/Layout"
import Container from "src/components/parts/Container"
import { MenuToMenuItemConnection, Post, RootQueryToCategoryConnection } from "lib/generated/client";
import Image from "next/image";
import style from './blog.module.css'
import sdk from "lib/wpSdk";
import Link from "next/link";
import removeTagsFromExcerpt from "lib/functions/removeTagsFromExcerpt";

interface Props {
  post: Post
  categories: RootQueryToCategoryConnection
  pickedOutPosts: MenuToMenuItemConnection
}

const PostSinglePage = ({post, categories, pickedOutPosts}: Props) => {
  const categoryEdges = categories.edges
  const pickedOutPostsEdges = pickedOutPosts.edges
  let excerpt = ''
  if(post.excerpt) {
    excerpt = removeTagsFromExcerpt(post.excerpt)
  }
  return (
    <Layout
      pageTitle={post.title}
      pageDescription={excerpt}
      pageImg={post?.featuredImage?.node?.sourceUrl}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/blog/${post.slug}`}
      h1=''
    >
      <Container className="pt-12">
        <div className="md:flex">
          <div className="blog md:w-2/3 mb-16">
            <article>
              <h1>{post.title}</h1>
              <div className="flex justify-center mb-8">{post.categories?.edges?.map(edge => (
                <Link key={edge?.node?.id} href={'/blog/category/' + edge?.node?.slug}>{edge?.node?.name}</Link>
              ))}</div>
              <div>
                <Image
                  src={post?.featuredImage?.node?.sourceUrl ? post?.featuredImage?.node?.sourceUrl  : '/images/no-image.jpg'}
                  width={1200}
                  height={800}
                  alt={post?.title as string}
                />
              </div>
              {post.content && <div dangerouslySetInnerHTML={{__html: post.content}}></div>}
            </article>
          </div>
          <div className="md:w-1/3 md:pl-8">
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
  const res = await sdk.getPosts();
  const posts = res.posts;
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
  const res = await sdk.getPost({id: params?.slug as string});
  const resCategories = await sdk.getCategories();
  const resPickedOutPosts = await sdk.getPickedOutPosts();
  const post = res.post
  const categories = resCategories.categories
  const pickedOutPosts = resPickedOutPosts.menu?.menuItems
  return {
    props: {
      post,
      categories,
      pickedOutPosts
    }
  }
}

export default PostSinglePage