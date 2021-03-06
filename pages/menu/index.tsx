import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Button from "src/components/parts/Button"
import CircleText from "src/components/parts/CircleText"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import TextAndImageOver from "src/components/parts/TextAndImage/TextAndImageOver"
import TextAndVideo from "src/components/parts/TextAndVideo"
import Title from "src/components/parts/Title"
import TitleAndText from "src/components/parts/TitleAndText"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { menuCategories, menus } from "src/contents/menu"

const MenuPage = () => {
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
        </Container>
      </Layout>
    </>
  )
}

export default MenuPage