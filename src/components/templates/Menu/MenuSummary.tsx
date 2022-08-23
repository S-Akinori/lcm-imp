import { useRouter } from "next/router"
import { useEffect } from "react"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import { MenuObjectProp } from "src/types/MenuProp"
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

interface Props {
  menu: MenuObjectProp
  total: number
  isButton?: boolean
}

const MenuSummary = ({menu, total, isButton = false}: Props) => {
  const router = useRouter();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const menusJson = JSON.stringify(menu)
    sessionStorage.setItem('menus', menusJson);
    sessionStorage.setItem('total', total.toString());
    router.push('/contact/order');
  }

  return (
    <Box className="px-4 py-8">
      <h2 className="text-center mb-4">お客様の撮影プラン</h2>
      <div className="mb-4 px-4 text-center">
        <div>合計: <span className="text-accent text-3xl">{total.toLocaleString()}</span>円 (税込)</div>
        {menu.locations.find(item => item.id === 'outsideKantoArea') && <div className="text-sm">関東以外の撮影では別途交通費がかかります</div>}
      </div>
      <div className="md:flex flex-wrap mb-4">
        <div className="p-4 md:w-1/2 lg:w-1/4">
          <div><VideocamIcon className="text-accent" /> ムービーの種類</div>
          <ul>
            {menu.movies.length > 0 && menu.movies.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
            {menu.movies.length === 0 && (
              <li>なし</li>
            )}
          </ul>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/4">
          <div><LocationOnIcon className="text-accent" /> ロケーション</div>
          <ul>
            {menu.locations.length > 0 && menu.locations.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
            {menu.locations.length === 0 && (
              <li>なし</li>
            )}
          </ul>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/4">
          <div><VideoCallIcon className="text-accent" /> オプション</div>
          <ul>
            {menu.options.length > 0 && menu.options.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
            {menu.options.length === 0 && (
              <li>なし</li>
            )}
          </ul>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/4">
          <div><ThumbUpAltIcon className="text-accent" /> 割引</div>
          <ul>
            {menu.discounts.length > 0 && menu.discounts.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
            {menu.discounts.length === 0 && (
              <li>なし</li>
            )}
          </ul>
        </div>
      </div>
      {isButton && (
        <div className="text-center">
          <Button color="accent" onClick={onClick}>このプランで依頼をする</Button>
        </div>
      )}
    </Box>
  )
}

export default MenuSummary