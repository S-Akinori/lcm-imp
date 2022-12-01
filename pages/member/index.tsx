import { fetchAPI } from "lib/fetchAPI"
import { GetStaticProps } from "next"
import Layout from "src/components/Layout"
import CircleBackground from "src/components/parts/Animation/CircleBackground"
import AnimationTrigger from "src/components/parts/AnimationTrigger"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import TitleAndText from "src/components/parts/TitleAndText"
import MemberBox, { MemberBoxInfo, MemberBoxText } from "src/components/templates/MemberBox"
import { memberContents, subMemberText } from "src/contents/member"
import { TitleTextContentType } from "src/types/CommonProps"
import { MemberContent } from "src/types/Member"

const MemberPage = () => {
  return (
    <Layout
      pageTitle="結婚式ムービー制作メンバー"
      pageDescription="テンプレートのない結婚式ムービーを制作するメンバーを紹介します。プロのカメラマン、編集者とともに映像制作を楽しみましょう。"
      h1="テンプレートのない結婚式ムービー制作メンバー"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/flow.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/flow`}
    >
      <FV en="MEMBER" title="メンバー紹介" src="/images/members.jpg" objectPosition="center 20%" />
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container className="my-24">
          <CircleBackground width={200}>
            <section>
              <TitleAndText h2={subMemberText.h2}>{subMemberText.text}</TitleAndText>
            </section>
          </CircleBackground>
        </Container>
      </AnimationTrigger>
      <AnimationTrigger animation='fadeInBottom' startClass='opacity-0' rootMargin='-150px' triggerOnce>
        <Container>
          <section className="py-14">
            {memberContents && memberContents.map((item, index) => (
              <MemberBox key={index} name={item.name} role={item.role} image={item.image}>
                <MemberBoxText>{item.text}</MemberBoxText>
                <MemberBoxInfo className="mt-4 pt-4 border-t border-t-accent border-dashed">{item.info}</MemberBoxInfo>
              </MemberBox>
            ))}
          </section>
        </Container>
      </AnimationTrigger>
    </Layout>
  )
}

export default MemberPage