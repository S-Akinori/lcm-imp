import { MenuObjectProp, MenuProp } from "src/types/MenuProp"

export const topMenuText = {
  en: 'MENU',
  h2: '思い出を最高のカタチで残す',
  text: `プロのカメラマンと編集者によるオーダーメイドの結婚式ムービーを制作します。ドローン撮影やドキュメンタリー企画など、お好きなオプションを付けていくことで自分の料金プランを作ることができます。新郎新婦様、出席される方々全員が思い出に残るムービーを一緒に制作していきましょう。`,
  href: '/menu',
  linkText: 'メニューへ'
}

export const subMenuText = {
  h2: 'お客様に合ったシンプルなプランをご案内',
  text: '「前撮りのみ」、「前撮り+ムービー」などお客様が行いたい内容に合ったプランをお選びいただけます。選んだプランの中で内容の追加・削除も可能です。お客様の「やりたい」を叶えられるプランを選びましょう。'
}

export const menuPackages = [
  {
    id: 'package1',
    title: '前撮りプラン',
    price: 130000,
    includes: ['前撮り', 'ロケーション1カ所', 'ドレス', 'ヘアメイク']
  },
  {
    id: 'package2',
    title: 'ムービー+前撮りプラン',
    price: 230000,
    includes: ['ウェディングムービー1種', '前撮り', 'ドローン空撮', 'ロケーション1カ所', 'ドレス', 'ヘアメイク']
  },
]

export const menuNotes = [
  'プランに組み込まれている映像は「オープニングムービー」「プロフィールムービー」「エンドロールムービー」のどれでもご対応可能です',
  '東京発の出張交通費を頂きます',
  'ドレス、ヘアメイクが必要ない場合は金額が変わりますのでご相談ください。',
  'ドローン空撮は、場所によっては実施できないことがございます。',
  'ロケーション追加や物語風にしたいなどございましたら別途ご相談ください。',
]

export const menuCostNotes = [
  'お客様の移動にかかる交通費',
  '撮影場所や撮影対象物の使用許可手続き及び使用料のお支払い',
  '飲食費のお支払い',
  '衣装類や撮影小道具のご準備及びそれに伴う経費のお支払い',
  '自動車等の移動手段のレンタル及びレンタル費のお支払い',
  'ヘアメイクやスタイリスト等の外部スタッフのご依頼及び依頼費のお支払い'
]

export const menuMovies : MenuProp[] = [
  {
    id: 'profileMovie',
    name: 'profileMovie',
    title: 'プロフィールムービー',
    priceText: '159,500円',
    price: 159500,
    category: 'movies',
    disabled: false,
  },
  {
    id: 'openingMovie',
    name: 'openingMovie',
    title: 'オープニングムービー',
    priceText: '139,700円',
    price: 139700,
    category: 'movies',
    disabled: false,
  },
  {
    id: 'endingMovie',
    name: 'endingMovie',
    title: 'エンドロールムービー',
    priceText: '139,700円',
    price: 139700,
    category: 'movies',
    disabled: false,
  },
]

export const menuLocations : MenuProp[]  = [
  {
    id: 'kantoArea',
    name: 'location',
    title: '関東',
    priceText: '交通費0円',
    price: 0,
    category: 'locations',
    disabled: false,
  },
  {
    id: 'outsideKantoArea',
    name: 'location',
    title: '関東以外',
    priceText: '交通費別途相談',
    price: 0,
    category: 'locations',
    disabled: false,
  },
]

export const menuLocationsOptions : MenuProp[] = [
  {
    id: 'locationOption1',
    name: 'locationOption',
    title: '1カ所',
    priceText: '22,000円',
    price: 22000,
    category: 'locationOptions',
    disabled: false
  },
  {
    id: 'locationOption2',
    name: 'locationOption',
    title: '2カ所',
    priceText: '44,000円',
    price: 44000,
    category: 'locationOptions',
    disabled: false
  },
  {
    id: 'locationOption3',
    name: 'locationOption',
    title: '3カ所',
    priceText: '66,000円',
    price: 66000,
    category: 'locationOptions',
    disabled: false
  },
  {
    id: 'locationOption4',
    name: 'locationOption',
    title: '4カ所',
    priceText: '88,000円',
    price: 88000,
    category: 'locationOptions',
    disabled: false
  },
]

export const menuOptions : MenuProp[] = [
  {
    id: 'prePhoto',
    name: 'prePhoto',
    title: '前撮り',
    priceText: '59,400円',
    price: 59400,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option1',
    name: 'option1',
    title: '日曜、祝日撮影',
    priceText: '22,000円',
    price: 22000,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option2',
    name: 'option2',
    title: 'ドローン撮影',
    priceText: '33,000円',
    price: 33000,
    category: 'options',
    disabled: false,
  },
  {
    id: 'option3',
    name: 'option3',
    title: 'FPVドローン撮影',
    priceText: '55,000円',
    price: 55000,
    category: 'options',
    disabled: false,
  },
  // {
  //   id: 'option4',
  //   name: 'option4',
  //   title: 'ロケーション1カ所追加',
  //   text: '1カ所追加ごとに料金が発生します。複数カ所追加する場合はご相談ください。',
  //   priceText: '22,000円',
  //   price: 22000,
  //   category: 'options',
  //   disabled: false,
  // },
  {
    id: 'option5',
    name: 'option5',
    title: 'ドキュメンタリープラン',
    priceText: '77,000円',
    price: 77000,
    category: 'options',
    disabled: false,
  },
]

export const discountOptions : MenuProp[] = [
  {
    id: 'discountOption1',
    name: 'discountOption1',
    title: '早割',
    text: '挙式日の6か月前までにご予約された方が対象',
    priceText: '11,000円',
    price: -11000,
    category: 'discounts',
    disabled: false,
  },
  {
    id: 'discountOption2',
    name: 'discountOption2',
    title: 'SNS掲載割',
    text: '弊社のHP等での掲載、およびお客様のSNSでの掲載が可能な方が対象',
    priceText: '11,000円',
    price: -11000,
    category: 'discounts',
    disabled: false,
  },
  // {
  //   id: 'setDiscount',
  //   title: '前撮り + ムービーセット割り',
  //   text: 'ムービー1つと前撮りをご注文された方が対象',
  //   priceText: '19,800円',
  //   price: -19800,
  //   category: 'discounts',
  //   disabled: true,
  // },
  {
    id: 'setDiscount',
    name: 'setDiscount',
    title: 'セット割',
    text: 'ムービーを2種類以上ご注文された方が対象',
    priceText: '27,500円',
    price: -27500,
    category: 'discounts',
    disabled: true,
  },
]

export const movieIntroductions = [
  {
    id: 'movieDetail1',
    title: 'オープニングムービー',
    content: '披露宴で新郎新婦さまが入場される前に流れるムービーです。披露宴の最初を飾る余興ムービーですので、感嘆の声が上がるムービーを創りましょう！'
  },
  {
    id: 'movieDetail2',
    title: 'プロフィールムービー',
    content: '披露宴途中でお二人の生い立ちを紹介するムービーです。演出 + インタビュー動画でゲストを楽しませましょう！'
  },
  {
    id: 'movieDetail3',
    title: 'エンドロールムービー',
    content: '披露宴の最後に流れるムービーです。スタッフロール風に1人1人感謝のコメントを流し、全体に感謝の気持ちを伝えましょう！'
  },
]


export const movieDetails = [
  {
    id: 'movieDetail1',
    title: '上映時間',
    content: '3～5分'
  },
  {
    id: 'movieDetail2',
    title: '納品形式',
    content: 'データ + DVD'
  },
  // {
  //   id: 'movieDetail3',
  //   title: '画面比率',
  //   content: '16:9または4:3（上下に黒帯が入ります）'
  // },
  {
    id: 'movieDetail4',
    title: '納品日',
    content: '撮影から1か月以内'
  },
]

export const locationDetail = {
  title: 'ロケーションについて',
  content: 'わたしたちのムービーは、ロケーション撮影をした映像で制作します。海や山といった美しい場所、思い出の場所などお好きな場所をお選びいただけます。\n関東圏内なら一律20,000円、それ以外は別途相談となります。'
}

export const optionDetails = [
  {
    id: 'optionDetail1',
    title: 'FPVドローンとは？',
    content: 'ドローン視点で操作できるドローンです。普通のドローンよりも速く細かい動きが可能なので、より爽快で壮大な演出を作り出すことができます。'
  },
  {
    id: 'optionDetail2',
    title: 'ドキュメンタリープランとは？',
    content: 'ドラマやミュージックビデオのパロディなど、脚本やセリフを制作し撮影するプランです。余興ムービーとして、会場をより盛り上げたい方におススメです。'
  },
]

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