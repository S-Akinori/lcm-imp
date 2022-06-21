import Link from "next/link"
import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import { newsContents } from "src/contents/news"

const NewsPage = () => {
  return (
    <Layout>
      <FV en="NEWS" title="お知らせ" src="/images/news.jpg" />
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="py-14 max-w-screen-lg">
          <ul className=''>
            {newsContents && newsContents.map(news => (
              <li key={news.id} className="py-2 mb-2">
                <Link href={news.href}><a className='flex flex-col md:flex-row md:justify-start'><span className='mr-4 lg:mr-8'>{news.date}</span><span>{news.title}</span></a></Link>
              </li>
            ))}
          </ul>
        </Container>
      </AnimationTrigger>
    </Layout>
  )
}
export default NewsPage