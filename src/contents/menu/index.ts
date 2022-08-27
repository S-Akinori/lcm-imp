import { MenuObjectProp, MenuProp } from "src/types/MenuProp"

export const topMenuText = {
  en: 'MENU',
  h2: '思い出を最高のカタチで残す',
  text: `プロのカメラマンと編集者によるオーダーメイドの結婚式ムービーを制作いたします。\n新郎新婦様、出席される方々全員が思い出に残るムービーを一緒制作していきましょう。`,
  href: '/menu',
  linkText: 'メニューへ'
}

export const menuCategories = [
  {
    id: 'category1',
    name: '結婚式前制作',
    en: 'Pre Wedding',
    slug: 'pre-wedding-production'
  },
  {
    id: 'category2',
    name: '結婚式当日制作',
    en: 'That Day',
    slug: 'wedding-production',
    description: '※当日プランは式場によってできない場合がございます。'
  }
]

export const menus = [
  {
    id: 'menu1',
    title: '前撮りプラン',
    price: '55,000円(税込)',
    text: 'ロケーション撮影を行います。おしゃれな場所、思い出の場所で一生の記念になる写真を撮りお渡しします。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-pre-photo.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/pre-photo',
    category: 'category1',
    isTop: true
  },
  {
    id: 'menu2',
    title: 'ウェディングムービー制作',
    price: '286,000円（税込）',
    text: '結婚式で上映するムービーを制作します。\nドローンを用いた演出など、参加される方全員が驚く映像を制作します。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-wedding-movie.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/wedding-movie',
    category: 'category1',
    isTop: true
  },
  {
    id: 'menu3',
    title: '取って出しエンドロールムービー制作',
    price: '198,000円（税込）',
    text: '結婚式当日の風景を撮影したものでエンドロールムービーを制作し、そのまま上映します。\nライブ感あふれる映像を楽しむことができます。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-ending-movie.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/ending-movie',
    category: 'category2',
    isTop: true
  },
  {
    id: 'menu4',
    title: '当日記録写真・動画撮影',
    price: '132,000円（税込）',
    text: '結婚式当日の様子を写真と動画に収めます。Web、アルバムの両方でお渡ししますので周りの方々と思い出を分かち合いましょう！',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-photo.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/photo-movie',
    category: 'category2',
    isTop: false
  },
  {
    id: 'menu6',
    title: 'ウェディングムービー2本制作',
    price: '374,000円（税込）',
    text: 'ウェディングムービーを2本制作するプランです。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-wedding-movie2.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/wedding-movie-2',
    category: 'category1',
    isTop: false
  },
  {
    id: 'menu5',
    title: 'オーダーメイド編集',
    price: '66,000円（税込）',
    text: 'いただいた素材を編集し納品するプランです。すでに素材があり、安く高品質なムービーを作りたい方にオススメです。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-editing.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/wedding-movie-editing',
    category: 'category1',
    isTop: false
  },
  {
    id: 'menu7',
    title: '結婚式１日密着撮影',
    price: '275,000円（税込）',
    text: '結婚式当日、式が始まる前から終わった後まで撮影をします。取って出しエンドロールムービー、記録写真撮影がすべて含まれています。',
    src: 'https://youtu.be/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-one-day.jpg',
      width: 800,
      height: 400,
    },
    link: '/menu/one-day-plan',
    category: 'category2',
    isTop: false
  },
]

export const menuArticles = [
  {
    id: 'menuArticle1' ,
    title: '前撮りプラン',
    slug: 'pre-photo',
    category: 'category1',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-pre-photo.jpg',
      width: 1200,
      height: 650,
    },
    images: [
      {
        id: 'menuArticle1_image1',
        src: '/images/concept.jpg',
        alt: '前撮りプラン'
      },
      {
        id: 'menuArticle1_image2',
        src: '/images/concept1.jpg',
        alt: '前撮りプラン'
      },
      {
        id: 'menuArticle1_image3',
        src: '/images/concept2.jpg',
        alt: '前撮りプラン'
      },
      {
        id: 'menuArticle1_image4',
        src: '/images/concept3.jpg',
        alt: '前撮りプラン'
      },
    ],
    content: 'ロケーション前撮りです。思い出の場所、映える場所で撮影し思い出になる写真をお渡しします。',
    price: '55,000円(税込)',
    details: [
      {
        id: 'detail1',
        title: '納品日',
        content: '撮影から1週間以内',
      },
      {
        id: 'detail2',
        title: '納品形態',
        content: '現像写真, 写真データ',
      },
      {
        id: 'detail3',
        title: '注意事項',
        content: '・ドレス等はご持参いただきます。\n・交通費は関東圏では無料、それ以外では別途お支払いいただきます。',
      },
    ]
  },
  {
    id: 'menuArticle2' ,
    title: 'ウェディングムービー制作',
    slug: 'wedding-movie',
    category: 'category1',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-wedding-movie.jpg',
      width: 1200,
      height: 650,
    },
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
        content: 'DVDまたはBlu-ray',
      },
      {
        id: 'detail4',
        title: '申込期限',
        content: '挙式当日から1か月前\n ※挙式が1か月以内にある場合はご相談ください。',
      },
      {
        id: 'detail5',
        title: '注意事項',
        content: '・服装やメイクはご準備願います。\n・交通費はご負担願います。\n・撮影は原則1日です。複数日に分けて撮影する場合は別途料金が発生します。',
      },
    ]
  },
  {
    id: 'menuArticle3' ,
    title: 'ウェディングムービー2本制作',
    slug: 'wedding-movie-2',
    category: 'category1',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-wedding-movie2.jpg',
      width: 1200,
      height: 650,
    },
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
    content: '「ウェディングムービー制作」のお得な2本セットです。プロフィールムービーやオープニングムービーにご使用いただけます。',
    price: '374,000円(税込)',
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
        content: 'DVDまたはBlu-ray',
      },
      {
        id: 'detail4',
        title: '申込期限',
        content: '挙式当日から1か月前\n ※挙式が1か月以内にある場合はご相談ください。',
      },
      {
        id: 'detail5',
        title: '注意事項',
        content: '・服装やメイクはご準備願います。\n・交通費はご負担願います。\n・撮影は原則1日です。複数日に分けて撮影する場合は別途料金が発生します。',
      },
    ]
  },
  {
    id: 'menuArticle4' ,
    title: 'オーダーメイド編集',
    slug: 'wedding-movie-editing',
    category: 'category1',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-editing.jpg',
      width: 1200,
      height: 650,
    },
    images: [
      {
        id: 'menuArticle1_image1',
        src: '/images/concept.jpg',
        alt: 'オーダーメイド編集'
      },
      {
        id: 'menuArticle1_image2',
        src: '/images/concept1.jpg',
        alt: 'オーダーメイド編集'
      },
      {
        id: 'menuArticle1_image3',
        src: '/images/concept2.jpg',
        alt: 'オーダーメイド編集'
      },
      {
        id: 'menuArticle1_image4',
        src: '/images/concept3.jpg',
        alt: 'オーダーメイド編集'
      },
    ],
    content: 'いただいた素材からウェディングムービーを制作します。かわいい、おしゃれ、かっこいい、など新郎新婦さまの好みに合わせて制作します。',
    price: '66,000円(税込)',
    details: [
      {
        id: 'detail1',
        title: '内容',
        content: 'ムービー１品。複数の場合はご相談ください。',
      },
      {
        id: 'detail2',
        title: '納品日',
        content: '素材をご提供から1週間以内',
      },
      {
        id: 'detail3',
        title: '再生時間',
        content: '10分未満',
      },
      {
        id: 'detail4',
        title: '納品形態',
        content: 'DVD',
      },
    ]
  },
  {
    id: 'menuArticle5' ,
    title: '撮って出しエンドロールムービー',
    slug: 'ending-movie',
    category: 'category2',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-ending-movie.jpg',
      width: 1200,
      height: 650,
    },
    images: [
      {
        id: 'menuArticle1_image1',
        src: '/images/concept.jpg',
        alt: '撮って出しエンドロールムービー'
      },
      {
        id: 'menuArticle1_image2',
        src: '/images/concept1.jpg',
        alt: '撮って出しエンドロールムービー'
      },
      {
        id: 'menuArticle1_image3',
        src: '/images/concept2.jpg',
        alt: '撮って出しエンドロールムービー'
      },
      {
        id: 'menuArticle1_image4',
        src: '/images/concept3.jpg',
        alt: '撮って出しエンドロールムービー'
      },
    ],
    content: '当日の結婚式を写真、動画に収めてエンドロールムービーを制作します。ライブ感あふれる映像を結婚式の最後で楽しみましょう！',
    price: '198,000円(税込)',
    details: [
      {
        id: 'detail1',
        title: '再生時間',
        content: '10分未満',
      },
      {
        id: 'detail2',
        title: '注意',
        content: '式場で撮影および撮って出しが可能な場合のみ承ります。',
      },
    ]
  },
  {
    id: 'menuArticle6' ,
    title: '当日記録写真・動画撮影',
    slug: 'photo-movie',
    category: 'category2',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-photo.jpg',
      width: 1200,
      height: 650,
    },
    images: [
      {
        id: 'menuArticle1_image1',
        src: '/images/concept.jpg',
        alt: '撮って出しエンドロールムービー'
      },
      {
        id: 'menuArticle1_image2',
        src: '/images/concept1.jpg',
        alt: '撮って出しエンドロールムービー'
      },
      {
        id: 'menuArticle1_image3',
        src: '/images/concept2.jpg',
        alt: '撮って出しエンドロールムービー'
      },
      {
        id: 'menuArticle1_image4',
        src: '/images/concept3.jpg',
        alt: '撮って出しエンドロールムービー'
      },
    ],
    content: 'プロのカメラマンが当日の結婚式を写真、動画に収めます。素敵な結婚式を最高のカタチにしてお渡しします。\n※撮って出しエンドロールムービーの制作は含まれていません。',
    price: '132,000円(税込)',
    details: [
      {
        id: 'detail1',
        title: '納品形態',
        content: '写真データ',
      },
      {
        id: 'detail2',
        title: '注意',
        content: '式場で撮影および撮って出しが可能な場合のみ承ります。',
      },
    ]
  },
  {
    id: 'menuArticle7' ,
    title: '結婚式１日密着撮影',
    slug: 'one-day-plan',
    category: 'category2',
    videoSrc: 'https://www.youtube.com/embed/rPzbR5m5VhY',
    thumbnail: {
      src: '/images/menu-one-day.jpg',
      width: 1200,
      height: 650,
    },
    images: [
      {
        id: 'menuArticle1_image1',
        src: '/images/concept.jpg',
        alt: '結婚式１日密着撮影'
      },
      {
        id: 'menuArticle1_image2',
        src: '/images/concept1.jpg',
        alt: '結婚式１日密着撮影'
      },
      {
        id: 'menuArticle1_image3',
        src: '/images/concept2.jpg',
        alt: '結婚式１日密着撮影'
      },
      {
        id: 'menuArticle1_image4',
        src: '/images/concept3.jpg',
        alt: '結婚式１日密着撮影'
      },
    ],
    content: '結婚式の初めから終わりまで、密着する形で写真や動画に記録していきます。また、それらの素材を使ってエンドロールムービーを制作し上映いたします。',
    price: '275,000円(税込)',
    details: [
      {
        id: 'detail2',
        title: '注意',
        content: '式場で撮影および撮って出しが可能な場合のみ承ります。',
      },
    ]
  },
]

export const menuMovies : MenuProp[] = [
  {
    id: 'prePhoto',
    title: '前撮り',
    priceText: '79,800円',
    price: 79800,
    category: 'movies',
    disabled: false,
  },
  {
    id: 'profileMovie',
    title: 'プロフィールムービー',
    priceText: '159,800円',
    price: 159800,
    category: 'movies',
    disabled: false,
  },
  {
    id: 'openingMovie',
    title: 'オープニングムービー',
    priceText: '139,800円',
    price: 139800,
    category: 'movies',
    disabled: false,
  },
  {
    id: 'endingMovie',
    title: 'エンドロールムービー',
    priceText: '139,800円',
    price: 139800,
    category: 'movies',
    disabled: false,
  },
]

export const menuLocations : MenuProp[]  = [
  {
    id: 'kantoArea',
    title: '関東',
    priceText: '20,000円',
    price: 20000,
    category: 'locations',
    disabled: false,
  },
  {
    id: 'outsideKantoArea',
    title: '関東以外',
    priceText: '料金別途相談',
    price: 0,
    category: 'locations',
    disabled: false,
  },
]

export const menuOptions : MenuProp[] = [
  {
    id: 'option1',
    title: '休日、祝日撮影',
    priceText: '30,000円',
    price: 30000,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option2',
    title: 'ドローン撮影',
    priceText: '40,000円',
    price: 40000,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option3',
    title: 'FPVドローン撮影',
    priceText: '80,000円',
    price: 80000,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option4',
    title: 'ロケーション1カ所追加',
    priceText: '20,000円',
    price: 20000,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option5',
    title: 'ドキュメンタリープラン',
    priceText: '70,000円',
    price: 70000,
    category: 'options',
    disabled: false,
  },
]

export const discountOptions : MenuProp[] = [
  {
    id: 'discountOption1',
    title: '早割',
    text: '挙式日の6か月前までにご予約された方が対象',
    priceText: '15,000円',
    price: -15000,
    category: 'discounts',
    disabled: false,
  },
  {
    id: 'discountOption2',
    title: 'SNS掲載割',
    text: '弊社のHP等での掲載、およびお客様のSNSでの掲載が可能な方が対象',
    priceText: '15,000円',
    price: -15000,
    category: 'discounts',
    disabled: false,
  },
  {
    id: 'setDiscount',
    title: 'セット割',
    text: 'ムービー、前撮りを合計2種類以上ご注文された方が対象',
    priceText: '19,800円',
    price: -19800,
    category: 'discounts',
    disabled: true,
  },
]