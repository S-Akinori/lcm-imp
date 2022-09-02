import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import Table from "src/components/parts/Table"
import TableRow from "src/components/parts/Table/TableRow"
import TableCell from "src/components/parts/Table/TableRow/TableCell"
import TextAndImage from "src/components/parts/TextAndImage"
import TitleAndText from "src/components/parts/TitleAndText"
import { companies } from "src/contents/company"
import { subConceptMessages, subConceptText } from "src/contents/concept"

const ConceptPage = () => {
  return (
    <>
      <Layout
        pageTitle="運営会社"
        pageDescription="結婚式ムービー制作をはじめ、前撮りやフォトウェディング、結婚式カメラマン派遣も行っています。結婚式で感動が巻き起こる演出をご提供します。"
        h1="感動する結婚式ムービーを制作"
        pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/company.jpg`}
        pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/company`}
      >
        <FV en="COMPANY" title="運営会社" src="/images/company.jpg" />
        <Container>
          {companies && companies.map(company => (
            <Table className="py-12" key={company.id}>
              {company.contents.map((item) => (
                <TableRow key={item.id}>
                  <TableCell type="th">{item.title}</TableCell>
                  <TableCell>{item.content}</TableCell>
                </TableRow>
              ))}
            </Table>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export default ConceptPage