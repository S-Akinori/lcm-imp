export const topMenuText = {
  'en': 'MENU',
  'h2': '一生の思い出をカタチに',
  'text': `プロのカメラマンと編集者による完全オーダーメイドの結婚式ムービーを制作いたします。\n新郎新婦様、出席される方々全員が思い出に残るムービーを一緒制作していきましょう。`
}

export const menus = [
  {
    id: 'menu1',
    title: '前撮りプラン',
    price: '99,000円(税込)',
    text: 'ロケーション撮影を行います。おしゃれな場所、思い出の場所で一生の記念になる写真をお渡しします。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/',
    category: '写真撮影',
    isTop: true
  },
  {
    id: 'menu2',
    title: 'ウェディングムービー制作',
    price: '286,000円（税込）',
    text: '結婚式で上映するムービーを制作します。\nドローンを用いた演出など、参加される方全員が驚く映像を制作します。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/menu/wedding-movie',
    category: 'ムービー制作',
    isTop: true
  },
  {
    id: 'menu3',
    title: '取って出しエンドロールムービー制作',
    price: '198,000円（税込）',
    text: '結婚式当日の風景を撮影したものでエンドロールムービーを制作し、そのまま上映します。\nライブ感あふれる映像を楽しむことができます。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/',
    category: 'ムービー制作',
    isTop: true
  },
  {
    id: 'menu4',
    title: '当日記録写真・動画撮影',
    price: '132,000円（税込）',
    text: '結婚式当日の様子を写真と動画に収めます。Web、アルバムの両方でお渡ししますので周りの方々と思い出を分かち合いましょう！',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/',
    category: '写真撮影',
    isTop: false
  },
  {
    id: 'menu5',
    title: 'オーダーメイド編集',
    price: '66,000円（税込）',
    text: 'いただいた素材を編集し納品するプランです。すでに素材があり、安く高品質なムービーを作りたい方にオススメです。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/',
    category: 'ムービー制作',
    isTop: false
  },
  {
    id: 'menu6',
    title: 'ウェディングムービー2本制作',
    price: '374,000円（税込）',
    text: 'ウェディングムービーを2本制作するプランです。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/',
    category: 'ムービー制作',
    isTop: false
  },
  {
    id: 'menu7',
    title: '結婚式１日密着撮影',
    price: '275,000円（税込）',
    text: '結婚式当日、式が始まる前から終わった後まで撮影をします。取って出しエンドロールムービー、記録写真撮影がすべて含まれています。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: '/images/concept.jpg',
    link: '/',
    category: '写真撮影',
    isTop: false
  },
]

export const menuArticles = [
  {
    id: 'menuArticle1' ,
    title: 'ウェディングムービー制作',
    slug: 'wedding-movie',
    category: 'ムービー制作',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    images: [
      {
        id: 'menuArticle1_image1',
        src: '/images/concept.jpg',
        alt: 'ウェディングムービー'
      },
      {
        id: 'menuArticle1_image2',
        src: '/images/concept1.jpg',
        alt: 'ウェディングムービー'
      },
      {
        id: 'menuArticle1_image3',
        src: '/images/concept2.jpg',
        alt: 'ウェディングムービー'
      },
      {
        id: 'menuArticle1_image4',
        src: '/images/concept3.jpg',
        alt: 'ウェディングムービー'
      },
    ],
    content: '完全オーダーメイドで結婚式ムービーを制作します。「どのような演出にしたいか」「撮影したい場所はどこか」などを一緒に考えながら最高のウェディングムービーを制作しましょう。',
    price: '286,000円(税込)',
    details: [
      {
        id: 'detail1',
        title: '内容',
        content: '・プロフィールムービー、オープニングムービー、エンドロールムービーのうち1つ\n・ドローン使用\n・ロケーション撮影',
      },
      {
        id: 'detail2',
        title: '上映時間',
        content: '10分未満',
      },
      {
        id: 'detail3',
        title: '納品形態',
        content: 'DVD',
      },
      {
        id: 'detail4',
        title: '申込期限',
        content: '挙式当日から1か月前',
      },
    ]
  }
]