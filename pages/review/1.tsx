import Image from "next/image"
import Layout from "src/components/Layout"
import Box from "src/components/parts/Box"
import Button from "src/components/parts/Button"
import Container from "src/components/parts/Container"
import Video from "src/components/parts/Video"
import ReviewBox, { ReviewBoxList, ReviewBoxTitle } from "src/components/templates/ReviewBox"

const reviewListItems = [
  '満足している',
  'やや満足している',
  'どちらとも言えない',
  'あまり満足していない',
  '満足していない',
]

const ReviewSinglePage = () => {
  return (
    <Layout>
      <Container className="pt-12">
        <div className="mx-auto max-w-screen-lg">
          <div className="review">
            <article>
              <div className="mb-4">
                <h1 className="text-center">映画のような引き込まれる世界観！</h1>
                <div className="text-center">
                  <div>オープニングムービー</div>
                  <div>Hご夫妻（兵庫県）</div>
                  <div>2022/9/23 挙式</div>
                </div>
              </div>
              <div className="mb-8"><Video src="https://www.youtube.com/embed/9waTBoguAk4" /></div>
              <div className="flex">
                <div className="w-1/2 md:pr-4">
                  <Image
                    src='/images/review/image_review1.jpg'
                    width={1080}
                    height={1080}
                    objectFit="cover"
                  />
                </div>
                <div className="w-1/2 md:pl-4">
                  <Image
                    src='/images/review/image_review2.jpg'
                    width={1080}
                    height={1080}
                    objectFit="cover"
                  />
                </div>
              </div>
              <section>
                <h2>お客様アンケート回答</h2>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>撮影の満足度は？</ReviewBoxTitle>
                    <ReviewBoxList listItems={reviewListItems} markedIndex={0} />
                  </ReviewBox>
                </div>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>ムービーの満足度は？</ReviewBoxTitle>
                    <ReviewBoxList listItems={reviewListItems} markedIndex={0} />
                  </ReviewBox>
                </div>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>弊社を利用された感想を教えてください</ReviewBoxTitle>
                    <div className="py-4">映画のような引き込まれる世界観で完成度の高いムービーを作って頂きました！スタッフさんも明るく楽しい撮影で、とてもいい思い出になりました✨</div>
                  </ReviewBox>
                </div>
                <div className="mb-8">
                  <ReviewBox>
                    <ReviewBoxTitle>ムービー上映後、周りからどんな反応がありましまか？</ReviewBoxTitle>
                    <div className="py-4">素敵だった！ロケーションが綺麗だった！というお声が多くゲストにも好評でした！</div>
                  </ReviewBox>
                </div>
              </section>
              <section>
                <h2>スタッフからのメッセージ</h2>
                <div>
                  <p>ご結婚おめでとうございます！</p>
                  <p>今回は「ロマンティック × 感動」というテーマでオープニングムービーを作らせていただきました！</p>
                  <p>前半はドラマのようなプロポーズシーンで引き込まれる演出を、後半はガラッと雰囲気が変わって海辺でドローンを取り入れた爽快感のある演出を出しました！</p>
                  <p>「初っ端から盛り上がる最高のムービーを」という思いで作らせていただきました！</p>
                  <p>撮影、ムービーともにご好評いただけて大変嬉しいです♪</p>
                  <p>撮影も楽しんでいただけたということで、これも一つの思い出になればと思います！</p>
                  <p>プロポーズシーンの演技など、お二人の前向きなご協力のもと最高のムービーが作れたこと、わたしたちとしても非常に感謝です！ありがとうございます！</p>
                  <p>ご夫妻の末永い健康とご多幸をお祈り申し上げます。改めまして、おめでとうございます。</p>
                  <p>スタッフ一同</p>
                </div>
              </section>
              <div className="text-center"><Button href="/review">お客様の声一覧へ</Button></div>
            </article>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ReviewSinglePage