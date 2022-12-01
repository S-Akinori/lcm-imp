import Table from "src/components/parts/Table"
import TableRow from "src/components/parts/Table/TableRow"
import TableCell from "src/components/parts/Table/TableRow/TableCell"
import { locationDetail, movieDetails, movieIntroductions, optionDetails } from "src/contents/menu"

const MenuDetail = () => {
  return (
    <div>
      <div>
        <h3 className="title-border-b">各ウェディングムービーについて</h3>
        {movieIntroductions && movieIntroductions.map(item => (
          <div className="mb-6" key={item.id}>
            <h4>【{item.title}】</h4>
            <p>{item.content}</p>
          </div>
        ))}
        <Table>
          {movieDetails && movieDetails.map(item => (
            <TableRow className="!border-b-0" key={item.id}>
              <TableCell className="bg-main" type="th">{item.title}</TableCell>
              <TableCell>{item.content}</TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
      <div className="mt-12">
        <h3 className="title-border-b">{locationDetail.title}</h3>
        <p className="whitespace-pre-wrap">{locationDetail.content}</p>
      </div>
      {/* <div className="mt-12">
        <h3 className="title-border-b">オプションについて</h3>
        {optionDetails && optionDetails.map(item => (
          <div className="mb-6" key={item.id}>
            <h4>【{item.title}】</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}
export default MenuDetail