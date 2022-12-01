import { useRouter } from "next/router"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import { menuPackages, menus } from "src/contents/menu"
import { MenuPackage } from "src/types/Menu"

interface Props {
  isButton?: boolean
  selectedId?: string
}

const Menu = ({isButton = true, selectedId}: Props) => {
  return (
    <div className="md:flex">
      {menuPackages.map(menu => (
        <div key={menu.id} className="md:w-1/2 md:p-4 mb-8">
          <MenuItem isButton={isButton} menu={menu} selectedId={selectedId} />
        </div>
      ))}
    </div>
  )
}

interface MenuItemProps {
  menu: MenuPackage
  isButton?: boolean
  selectedId?: string
}

export const MenuItem = ({menu, isButton = true, selectedId}: MenuItemProps) => {
  const router = useRouter();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    sessionStorage.setItem('menuId', menu.id);
    router.push('/contact/order');
  }

  return (
    <Box color={menu.id === selectedId ? 'accent' : 'base'} className="h-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="py-2 mb-6 bg-white text-base-cont text-center">
            <h3 className="mb-0">{menu.title}</h3>
            <div><span className="text-accent text-2xl">&yen;</span> <span className="text-accent text-3xl">{menu.price.toLocaleString()}</span></div>
          </div>
          <div className="mb-8">
            <div>【このプランに含まれるもの】</div>
            <ul>
              {menu.includes.map((include, index) => (
                <li key={index}>{include}</li>
              ))}
            </ul>
          </div>
        </div>
        {isButton && (
          <div className="text-center">
            <Button color="accent" onClick={onClick} >このプランで注文する</Button>
          </div>
        )}
      </div>
    </Box>
  )
}

export default Menu