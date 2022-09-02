import { Dispatch, SetStateAction } from "react"
import InputGroup from "src/components/parts/Form/InputGroup"
import Input from "src/components/parts/Form/InputGroup/Input"
import InputLabel from "src/components/parts/Form/InputGroup/InputLabel"
import TitleLabel from "src/components/parts/Title/TitleLabel"
import { discountOptions, menuLocations, menuMovies, menuOptions } from "src/contents/menu"
import { MenuObjectProp, MenuProp } from "src/types/MenuProp"

interface Props {
  menuState: {
    menu: MenuObjectProp
    setMenu: Dispatch<SetStateAction<MenuObjectProp>>
  }
  totalState: {
    total: number
    setTotal: Dispatch<SetStateAction<number>>
  }
}

const MenuForm = ({menuState, totalState}: Props) => {
  const {menu, setMenu} = menuState
  const {total, setTotal} = totalState

  console.log(menu)
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, menuItem: MenuProp) => {
    //この辺要修正
    let price = 0
    let menuObj : MenuObjectProp | null = null

    if(e.currentTarget.checked) {
      price = parseInt(e.currentTarget.value);
      menuObj = {
        ...menu,
        [menuItem.category] : [
          ...menu[menuItem.category],
          menuItem
        ],
      }
    } else {
      price = - parseInt(e.currentTarget.value);
      menuObj = {
        ...menu,
        [menuItem.category] : menu[menuItem.category].filter(item => item.id !== menuItem.id)
      }
    }
    setMenu(menuObj);
    setTotal(total + price);
  }

  return (
    <div>
      <div className="mb-12">
        <div className="mb-4">
          <TitleLabel heading="h3" label="STEP1">ムービーの種類を選択</TitleLabel>
        </div>
        <div className="md:flex flex-wrap">
          {menuMovies && menuMovies.map(item => (
            <InputGroup className="flex items-center mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
              <Input name={item.id} id={item.id} type="checkbox" checked={menu.movies.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
              <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
            </InputGroup>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-4">
          <div className="mb-4">
            <TitleLabel heading="h3" label="STEP2">ロケーション場所を選択</TitleLabel>
          </div>
          <div className="md:flex flex-wrap">
            {menuLocations && menuLocations.map(item => (
              <InputGroup className="flex items-center mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                <Input name={item.id} id={item.id} type="checkbox" checked={menu.locations.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
              </InputGroup>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-4">
          <div className="mb-4">
            <TitleLabel heading="h3" label="STEP3">オプションを選択</TitleLabel>
          </div>
          <div className="md:flex flex-wrap">
            {menuOptions && menuOptions.map(item => (
              <InputGroup className="flex items-center mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                <Input name={item.id} id={item.id} type="checkbox" checked={menu.options.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
              </InputGroup>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-4">
          <div className="mb-4">
            <TitleLabel heading="h3" label="STEP4">割引オプションを選択</TitleLabel>
          </div>
          <div className="md:flex flex-wrap">
            {discountOptions && discountOptions.map(item => (
              <InputGroup className="flex mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                <Input disabled={item.disabled} name={item.id} id={item.id} type="checkbox" checked={menu.discounts.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                <div>
                  <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
                  <p className="text-xs">{item.text}</p>
                </div>
              </InputGroup>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuForm