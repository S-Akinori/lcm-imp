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
      <Layout>
        <FV en="COMPANY" title="運営会社" src="/images/company.jpg" />
        <Container>
          {companies && companies.map(company => (
            <Table key={company.id}>
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