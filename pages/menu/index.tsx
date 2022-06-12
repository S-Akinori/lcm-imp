import Layout from "src/components/Layout"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Button from "src/components/parts/Button"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TextAndImage from "src/components/parts/TextAndImage"
import TextAndVideo from "src/components/parts/TextAndVideo"
import TitleAndText from "src/components/parts/TitleAndText"
import { subConceptMessages, subConceptText } from "src/contents/concept"
import { menus } from "src/contents/menu"

const MenuPage = () => {
  return (
    <>
      <Layout>
        <FV en="MENU" title="メニュー" src="/images/concept.jpg" />
        <Container>
          <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
            <div>
              {menus && menus.map((menu, index) => (
                <TextAndVideo
                  src={menu.src}
                  key={menu.id}
                  rtl={index % 2 == 0 ? true : false}
                >
                  <div className='p-4 md:p-0'>
                    <h3 className='pb-0'>{menu.title}</h3>
                    <div className='mb-4'>{menu.price}</div>
                    <div>{menu.text}</div>
                    <div className='mt-12'><Button href={menu.link}>詳細を見る</Button></div>
                  </div>
                </TextAndVideo>
              ))}
            </div>
          </AnimationTrigger>
        </Container>
      </Layout>
    </>
  )
}

export default MenuPage