import Link from "next/link"
import Layout from "src/components/Layout"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import { newsContents } from "src/contents/news"

const NewsPage = () => {
  return (
    <Layout>
      <FV en="NEWS" title="新着情報" src="/images/concept.jpg" />
      <Container className="py-14 max-w-screen-lg">
        <ul className=''>
          {newsContents && newsContents.map(news => (
            <li key={news.id} className="py-2 mb-2">
              <Link href={news.href}><a className='flex flex-col md:flex-row md:justify-start'><span className='mr-4 lg:mr-8'>{news.date}</span><span>{news.title}</span></a></Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
export default NewsPage