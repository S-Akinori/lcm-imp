import dedent from 'dedent';

export const topMemberText = {
  en: 'CONCEPT',
  h2: 'わたしたちの軌跡を結婚式ムービーに',
  text: `人生の一大イベント。\n一生の思い出をカタチにしたい。\n\n結婚式に出席するすべての人が\n感動するムービーを制作します。`,
  image: {
    url: '/images/image-member1.JPG',
    width: 1280,
    height: 886,
  },
  href: '/concept',
  linkText: 'コンセプトへ',
}

export const subMemberText = {
  h2: '個性豊かなメンバーで最高の結婚式ムービーを作ります',
  text: '結婚式ムービー制作に長けたカメラマンや編集者が集まっています。\nムービーそのものだけでなく、企画考案やロケーション撮影を楽しんで思い出になるよう、ユニークなメンバーを集めています。'
}

export const memberContents = [
  {
    id: 'member1',
    name: '石川和真\n Ishikawa Kazuma',
    role: 'ドローンパイロット / 映像クリエイター',
    text: dedent`
      幼い頃からシンガポールを含む10ヵ国以上滞在経験のあるクリエイターです！
      東北縦断のヒッチハイクをきっかけにカメラで最高の思い出を撮影することに目覚め、現在は結婚式ムービーで最高の結婚式になるよう活動しています！
      
      結婚式ムービーはわたしが中心になって撮影を行います！
      あ、名門の前橋育英で野球やっていたので「野球の演出」を入れたい方はお任せください！笑
      笑いあり、感動ありの結婚式ムービーを一緒に制作しましょう！
    `,
    info: dedent`
      出身: 群馬県高崎市
      高校 : 前橋育英
      大学 : 武蔵大学
      似ている芸能人 : 竹内涼真
    `,
    image: {
      url: '/images/image-member1.JPG',
      width: 1280,
      height: 720
    },
  },
  {
    id: 'member2',
    name: '植松 脩希\nUematsu Shuki',
    role: 'ドローンパイロット / 映像ディレクター',
    text: dedent`
      幼少期をシンガポールで過ごした、いわゆる「帰国子女」です！
      ちなみに英語は喋れません笑
      大学在学中に動画制作を始めて、YouTube運用を仕事にしてきました！
      
      結婚式ムービーでは企画をメインでやっていきます！
      常にニコニコしている愛されキャラなので、撮影はどこよりも楽しくやる自信ありです！笑
      素敵な結婚式ムービーを一緒に制作しましょう！
    `,
    info: dedent`
      出身: 千葉県成田市
      高校: 千葉県立佐倉高校
      大学: 法政大学
      似ている芸能人 : 風間俊介
    `,
    image: {
      url: '/images/image-member2.JPG',
      width: 1280,
      height: 720
    },
  },
  {
    id: 'member3',
    name: '佐保田 晃功\nSahoda Akinori',
    role: '前撮りカメラマン / Webエンジニア',
    text: dedent`
      「大学を中退して留学するつもりがコロナで行けなくなって、Webプログラマーとして個人事業主になる」
      というごく普通の人間です。
      
      ムービー制作では前撮り撮影と撮影風景の撮影をやっています！
      
      この「リンリン」チームで雑用、、
      ではなくて裏方を強いられる人間ですが(笑)、最高のムービーができるよう支えていきます！
    `,
    info: dedent`
      出身: 神奈川県横浜市
      高校: 鎌倉学園高校
      大学: 早稲田大学(中退)
      似ている芸能人: ワンオクtaka
    `,
    image: {
      url: '/images/image-member3.JPG',
      width: 1280,
      height: 720
    },
  },
]