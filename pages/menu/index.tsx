import { ConnectedTvOutlined, MultilineChart } from "@mui/icons-material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "src/components/Layout"
import CircleBackground from "src/components/parts/Animation/CircleBackground"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import CircleText from "src/components/parts/CircleText"
import Container from "src/components/parts/Container"
import InputGroup from "src/components/parts/Form/InputGroup"
import Input from "src/components/parts/Form/InputGroup/Input"
import InputLabel from "src/components/parts/Form/InputGroup/InputLabel"
import FV from "src/components/parts/FV"
import Table from "src/components/parts/Table"
import TableRow from "src/components/parts/Table/TableRow"
import TableCell from "src/components/parts/Table/TableRow/TableCell"
import TextAndImage from "src/components/parts/TextAndImage"
import TextAndImageOver from "src/components/parts/TextAndImage/TextAndImageOver"
import TextAndVideo from "src/components/parts/TextAndVideo"
import Title from "src/components/parts/Title"
import TitleLabel from "src/components/parts/Title/TitleLabel"
import TitleAndText from "src/components/parts/TitleAndText"
import Menu from "src/components/templates/Menu"
import MenuDetail from "src/components/templates/Menu/MenuDetail"
import MenuSummary from "src/components/templates/Menu/MenuSummary"
import MenuForm from "src/components/templates/MenuForm"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { discountOptions, locationDetail, menuCategories, menuCostNotes, menuLocations, menuLocationsOptions, menuMovies, menuNotes, menuOptions, menuPackages, menus, movieDetails, movieIntroductions, optionDetails, subMenuText } from "src/contents/menu"
import { MenuObjectProp, MenuProp } from "src/types/MenuProp"

const setDiscountId = 'setDiscount'

const MenuPage = () => {
  const [total, setTotal] = useState(menuLocationsOptions[0].price);
  const [menus, setMenus] = useState<MenuObjectProp>({
    movies: [],
    locations: [],
    locationOptions: [
      menuLocationsOptions[0]
    ],
    options: [],
    discounts: [],
  });

  useEffect(() => {
    const menusJson = sessionStorage.getItem('menus');
    const total = sessionStorage.getItem('total');
    if(menusJson && total) {
      const menus = JSON.parse(menusJson);
      setTotal(parseInt(total))
      setMenus(menus);
    }
  }, [])

  useEffect(() => {
    const setDiscount = discountOptions.find(item => item.id === setDiscountId) as MenuProp;
    if(!menus.discounts.find(item => item.id === setDiscountId) && menus.movies.length > 1) {
      const price = setDiscount.price
      const menuObj = {
        ...menus,
        discounts: [
          ...menus.discounts,   
          setDiscount
        ]
      }
      setMenus(menuObj);
      setTotal(total + price);
    } else if(menus.discounts.find(item => item.id === setDiscountId) && menus.movies.length < 2) {
      const price = -setDiscount.price
      const menuObj = {
        ...menus,
        discounts: menus.discounts.filter(item => item.id !== setDiscountId)
      }
      setMenus(menuObj);
      setTotal(total + price);
    }
  }, [menus])

  return (
    <Layout
      pageTitle="メニュー | 料金プランを自由に設定"
      pageDescription="プロフィールムービー、オープニングムービー、エンドロールムービーを完全実写で制作します。前撮りと結婚式ムービーはロケーション撮影を行い好きな場所で思い出を残せます。"
      h1="テンプレートを使わない自作ウェディングムービーの料金プラン"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/menu.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/menu`}
    >
      <FV en="MENU" title="メニュー" src="/images/menu.jpg" />
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <CircleBackground>
            <Title h2={subMenuText.h2} />
            <p>{subMenuText.text}</p>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      <Container>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <Menu />
          <Box>
            <ul className="text-sm">
              {menuNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </Box>
        </AnimationTrigger>
      </Container>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <CircleBackground md={{position: {right: '0', left: 'auto'}, width: 400}}>
            <Title h2="メニューの詳細" />
            <MenuDetail />
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      {/* <Container>
        <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
          <Title h2="自分にあったプランを作成しましょう！" / >
          <MenuForm menuState={{menu: menus, setMenu: setMenus}} totalState={{total: total, setTotal: setTotal}} />
        </AnimationTrigger>
      </Container>
      <Container>
        <MenuSummary menu={menus} total={total} isButton={true} />
      </Container> */}
      <Container className="my-24">
        <div className="text-sm">
          <h3>注意事項</h3>
          <div>
            <p>次の内容はお客様でご負担いただきます。</p>
            <ul>
              {menuCostNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
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
  )
}

export default MenuPage;