import { ConnectedTvOutlined, MultilineChart } from "@mui/icons-material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import CircleText from "src/components/parts/CircleText"
import Container from "src/components/parts/Container"
import InputGroup from "src/components/parts/Form/InputGroup"
import Input from "src/components/parts/Form/InputGroup/Input"
import InputLabel from "src/components/parts/Form/InputGroup/InputLabel"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import TextAndImageOver from "src/components/parts/TextAndImage/TextAndImageOver"
import TextAndVideo from "src/components/parts/TextAndVideo"
import Title from "src/components/parts/Title"
import TitleLabel from "src/components/parts/Title/TitleLabel"
import TitleAndText from "src/components/parts/TitleAndText"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { discountOptions, menuCategories, menuLocations, menuMovies, menuOptions, menus } from "src/contents/menu"
import { MenuObjectProp, MenuProp } from "src/types/MenuProp"

const MenuPage = () => {
  const router = useRouter()
  const [total, setTotal] = useState(0);
  const [menus, setMenus] = useState<MenuObjectProp>({
    movies: [],
    locations: [],
    options: [],
    discounts: [],
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, menu: MenuProp) => {
    //この辺要修正
    let price = 0
    let menuObj : MenuObjectProp | null = null
    const setDiscountId = 'setDiscount'
    const setDiscount = discountOptions.find(item => item.id === setDiscountId) as MenuProp;

    if(e.currentTarget.checked) {
      price = parseInt(e.currentTarget.value);
      menuObj = {
        ...menus,
        [menu.category] : [
          ...menus[menu.category],
          menu
        ],
      }
    } else {
      price = - parseInt(e.currentTarget.value);
      menuObj = {
        ...menus,
        [menu.category] : menus[menu.category].filter(item => item.id !== menu.id)
      }
    }
    
    if(!menus.discounts.find(item => item.id === setDiscountId) && menu.category == 'movies' && menus.movies.length > 0) {
      price += setDiscount.price
      menuObj.discounts = [
        ...menuObj.discounts,   
        setDiscount
      ]
    } else if(menus.discounts.find(item => item.id === setDiscountId) && menu.category == 'movies' && menus.movies.length === 0) {
      price -= setDiscount.price
      menuObj.discounts.filter(item => item.id !== setDiscountId)
    }
    console.log(price)
    setMenus(menuObj);
    setTotal(total + price);
  }

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const menusJson = JSON.stringify(menus)
    sessionStorage.setItem('menus', menusJson);
    sessionStorage.setItem('total', total.toString());
    router.push('/contact/order');
  }

  useEffect(() => {
    const menusJson = sessionStorage.getItem('menus');
    const total = sessionStorage.getItem('total');
    if(menusJson && total) {
      const menus = JSON.parse(menusJson);
      setTotal(parseInt(total))
      setMenus(menus);
    }
  }, [])

  return (
    <>
      <Layout
        pageTitle="メニュー"
        pageDescription="プロフィールムービー、オープニングムービーはもちろん、撮って出しエンドロールムービーの制作も行っています。前撮りと結婚式ムービーはロケーション撮影を行い好きな場所で思い出を残せます。"
        h1="テンプレートを使わない自作ウェディングムービーの料金プラン"
        pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/menu.jpg`}
        pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/menu`}
      >
        <FV en="MENU" title="メニュー" src="/images/menu.jpg" />
        <Container className="py-12">
          <Title h2="プランは一つだけ！自分だけの結婚式ムービーを制作します" />
          <p>わたしたちは「結婚式ムービー制作」というメニューだけをご提供しています。<br />その中で前撮りやドローン撮影など必要に応じたオプションを追加していただくことで、簡単にお見積もりができます。</p>
        </Container>
        <Container className="py-12">
          <div className="mb-4">
            <TitleLabel label="STEP1">ムービーの種類を選択</TitleLabel>
          </div>
          <div className="md:flex flex-wrap">
            {menuMovies && menuMovies.map(item => (
              <InputGroup className="flex items-center mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                <Input name={item.id} id={item.id} type="checkbox" checked={menus.movies.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
              </InputGroup>
            ))}
          </div>
        </Container>
        <Container className="py-12">
          <div className="mb-4">
            <div className="mb-4">
              <TitleLabel label="STEP2">ロケーション場所を選択</TitleLabel>
            </div>
            <div className="md:flex flex-wrap">
              {menuLocations && menuLocations.map(item => (
                <InputGroup className="flex items-center mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                  <Input name={item.id} id={item.id} type="checkbox" checked={menus.locations.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                  <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
                </InputGroup>
              ))}
            </div>
          </div>
        </Container>
        <Container className="py-12">
          <div className="mb-4">
            <div className="mb-4">
              <TitleLabel label="STEP3">オプションを選択</TitleLabel>
            </div>
            <div className="md:flex flex-wrap">
              {menuOptions && menuOptions.map(item => (
                <InputGroup className="flex items-center mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                  <Input name={item.id} id={item.id} type="checkbox" checked={menus.options.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                  <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
                </InputGroup>
              ))}
            </div>
          </div>
        </Container>
        <Container className="py-12">
          <div className="mb-4">
            <div className="mb-4">
              <TitleLabel label="STEP4">割引オプションを選択</TitleLabel>
            </div>
            <div className="md:flex flex-wrap">
              {discountOptions && discountOptions.map(item => (
                <InputGroup className="flex mb-0 md:pl-4 md:w-1/2 xl:w-1/3" key={item.id}>
                  <Input disabled={item.disabled} name={item.id} id={item.id} type="checkbox" checked={menus.discounts.findIndex(e => e.id === item.id) === -1 ? false : true} defaultValue={item.price.toString()} onChange={(e) => onChange(e, item)} />
                  <div>
                    <InputLabel htmlFor={item.id}>{item.title} : {item.priceText}</InputLabel>
                    <p className="text-xs">{item.text}</p>
                  </div>
                </InputGroup>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <Box className="px-4 py-8">
            <h2 className="text-center mb-4">お客様の撮影プラン</h2>
            <div className="mb-4 px-4 text-center">
              <div>合計: <span className="text-accent text-3xl">{total.toLocaleString()}</span>円 (税込)</div>
              {menus.locations.find(item => item.id === 'outsideKantoArea') && <div className="text-sm">関東以外の撮影では別途交通費がかかります</div>}
            </div>
            <div className="md:flex flex-wrap mb-4">
              <div className="p-4 md:w-1/2 lg:w-1/4">
                <div>ムービーの種類</div>
                <ul>
                  {menus.movies.length > 0 && menus.movies.map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                  {menus.movies.length === 0 && (
                    <li>なし</li>
                  )}
                </ul>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/4">
                <div>ロケーション</div>
                <ul>
                  {menus.locations.length > 0 && menus.locations.map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                  {menus.locations.length === 0 && (
                    <li>なし</li>
                  )}
                </ul>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/4">
                <div>オプション</div>
                <ul>
                  {menus.options.length > 0 && menus.options.map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                  {menus.options.length === 0 && (
                    <li>なし</li>
                  )}
                </ul>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/4">
                <div>割引</div>
                <ul>
                  {menus.discounts.length > 0 && menus.discounts.map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                  {menus.discounts.length === 0 && (
                    <li>なし</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Button color="accent" onClick={onClick}>このプランで依頼をする</Button>
            </div>
          </Box>
        </Container>
        {/* <Container className="py-12">
            <div>
              {menuCategories && menuCategories.map(category => (
                <div key={category.id}>
                  <div className="w-max mx-auto mb-8">
                    <CircleText rotation={6} radius={125} height={50} fontSize={14} className="text-accent">{category.en}</CircleText>
                    <div className="text-center text-xl">{category.name}</div>
                  </div>
                  {category.description && <div className="mb-8 text-center text-sm">{category.description}</div>}
                  {menus && menus.map((menu, index) => (
                    <>
                    {menu.category === category.id && (
                      <AnimationTrigger key={menu.id} animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
                        <TextAndImageOver
                          image={menu.thumbnail}
                          src={menu.src}
                          rtl
                          className="mb-24 md:mb-32"
                        >
                          <div>
                            <h3 className='pb-0 mb-0 text-accent'>{menu.title}</h3>
                            <div className='mb-4'>{menu.price}</div>
                            <div>{menu.text}</div>
                            <div className='mt-12'><Button href={menu.link}>詳細を見る</Button></div>
                          </div>
                        </TextAndImageOver>
                      </AnimationTrigger>
                    )}
                    </>
                  ))}
                </div>
              ))}
            </div>
        </Container> */}
      </Layout>
    </>
  )
}

export default MenuPage