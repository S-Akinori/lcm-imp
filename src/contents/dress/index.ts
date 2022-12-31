import dedent from "dedent"

export const subDressText = {
  h2: '結婚式ムービーの撮影用のドレスレンタルを行っています',
  text: '「ご自身でドレスの準備は大変！でもせっかくの撮影でドレスは着たい！」。そんな方のためにドレスの貸出をしています。郵送でドレスの貸出・返却ができるので手間を省けます'
}

export const dressFeature = {
  title: 'ドレスレンタルの特徴',
  contents: [
    {
      id: 'dressFeature1',
      title: '豊富なデザイン',
      text: dedent`
        38種類のドレスデザイン
        15種類のヘッドアクセサリー
        18種類のイヤリング
        上記からご希望のデザインをお選びいただきます。

        タキシードは24種類のデザインの中から新郎様のサイズに合わせて、いくつかご提案あせていただきます。
      `
    },
    {
      id: 'dressFeature2',
      title: ' サイズ直し不要',
      text: dedent`
        7号～13号までフリーサイズです。
        その場で簡単にサイズが調整できます。

        タキシードも旦那様のサイズに合わせていくつかご提示しますので、体にフィットしたもので撮影に望めます。
      `
    },
    {
      id: 'dressFeature3',
      title: 'お二人にご用意いただきたいのは1つだけ',
      text: dedent`
        ご衣裳だけでなく、ベールやシューズ、蝶ネクタイやサスペンダーなどの小物もついてきます。
        お二人には以下のものだけご用意ください。

        新婦様：ヌーブラ
        新郎様：Yシャツ
      `
    },
  ]
}

export const dressPlan = {
  title: 'レンタルプラン', 
}

export const dressFlow = {
  title: 'レンタルの流れ',
  contents: [
    {
      id: 'dressFlow1',
      title: 'ご注文',
      text: 'ご希望の衣装で在庫の確認をします',
      image: {
        src: '/images/image-dressflow1.png',
        width: 100,
        height: 100,
      }
    },
    {
      id: 'dressFlow2',
      title: '発送',
      text: '郵送にて発送します（送料は弊社負担）',
      image: {
        src: '/images/image-dressflow2.png',
        width: 100,
        height: 100,
      }
    },
    {
      id: 'dressFlow3',
      title: '商品到着',
      text: '撮影の2日前に到着予定です',
      image: {
        src: '/images/image-dressflow3.png',
        width: 100,
        height: 100,
      }
    },
    {
      id: 'dressFlow4',
      title: '撮影',
      text: '最高の撮影を素敵なドレスと共に！',
      image: {
        src: '/images/image-dressflow4.png',
        width: 100,
        height: 100,
      }
    },
    {
      id: 'dressFlow5',
      title: '返却',
      text: '郵送にてご返却をお願いします（送料はお客様ご負担）',
      image: {
        src: '/images/image-dressflow5.png',
        width: 100,
        height: 100,
      }
    },
  ]
}

export const dressFAQ = {
  title: 'Q&A',
  contents: [
    {
      id: 'dressFAQ1',
      title: 'レンタル期間はどれくらいですか？',
      text: '全プラン3泊4日でご用意しております。撮影の2日前にご自宅に届きます。撮影日の翌日に返送をお願いします。'
    },
    {
      id: 'dressFAQ2',
      title: '送料は含まれていますか？',
      text: '返送のみ送料をご負担願います。'
    },
    {
      id: 'dressFAQ3',
      title: 'アクセサリーやシューズは別のドレスでも使えますか？',
      text: 'お使いいいただけます。撮影当日にスタイルチェンジした後や他のドレスと合わせてコーデを楽しめます。'
    }
  ]
}

export const dressGallery = {
  title: 'ドレスカタログ',
  contents: [
    {
      id: "dressGallery1",
      title: 'CO-001',
      images: [
        {
          id: 'dressGallery1-0',
          url: '/images/dress/CO-001-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery1-1',
          url: '/images/dress/CO-001-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery1-2',
          url: '/images/dress/CO-001-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "dressGallery2",
      title: 'CO-004',
      images: [
        {
          id: 'dressGallery2-0',
          url: '/images/dress/CO-004-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery2-1',
          url: '/images/dress/CO-004-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery2-2',
          url: '/images/dress/CO-004-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "dressGallery3",
      title: 'CO-007',
      images: [
        {
          id: 'dressGallery3-0',
          url: '/images/dress/CO-007-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery3-1',
          url: '/images/dress/CO-007-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery3-2',
          url: '/images/dress/CO-007-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "dressGallery4",
      title: 'CO-008',
      images: [
        {
          id: 'dressGallery4-0',
          url: '/images/dress/CO-008-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery4-1',
          url: '/images/dress/CO-008-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery4-2',
          url: '/images/dress/CO-008-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "dressGallery5",
      title: 'CO-009',
      images: [
        {
          id: 'dressGallery5-0',
          url: '/images/dress/CO-009-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery5-1',
          url: '/images/dress/CO-009-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery5-2',
          url: '/images/dress/CO-009-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "dressGallery6",
      title: 'CO-012',
      images: [
        {
          id: 'dressGallery6-0',
          url: '/images/dress/CO-012-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery6-1',
          url: '/images/dress/CO-012-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'dressGallery6-2',
          url: '/images/dress/CO-012-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-013",
      title: 'CO-013',
      images: [
        {
          id: 'CO-013-0',
          url: '/images/dress/CO-013-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-013-1',
          url: '/images/dress/CO-013-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-013-2',
          url: '/images/dress/CO-013-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-017",
      title: 'CO-017',
      images: [
        {
          id: 'CO-017-0',
          url: '/images/dress/CO-017-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-017-1',
          url: '/images/dress/CO-017-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-017-2',
          url: '/images/dress/CO-017-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-019",
      title: 'CO-019',
      images: [
        {
          id: 'CO-019-0',
          url: '/images/dress/CO-019-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-019-1',
          url: '/images/dress/CO-019-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-019-2',
          url: '/images/dress/CO-019-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-027",
      title: 'CO-027',
      images: [
        {
          id: 'CO-027-0',
          url: '/images/dress/CO-027-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-027-1',
          url: '/images/dress/CO-027-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-027-2',
          url: '/images/dress/CO-027-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-029",
      title: 'CO-029',
      images: [
        {
          id: 'CO-029-0',
          url: '/images/dress/CO-029-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-029-1',
          url: '/images/dress/CO-029-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-029-2',
          url: '/images/dress/CO-029-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-033",
      title: 'CO-033',
      images: [
        {
          id: 'CO-033-0',
          url: '/images/dress/CO-033-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-033-1',
          url: '/images/dress/CO-033-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-033-2',
          url: '/images/dress/CO-033-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-034",
      title: 'CO-034',
      images: [
        {
          id: 'CO-034-0',
          url: '/images/dress/CO-034-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-034-1',
          url: '/images/dress/CO-034-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-034-2',
          url: '/images/dress/CO-034-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-035",
      title: 'CO-035',
      images: [
        {
          id: 'CO-035-0',
          url: '/images/dress/CO-035-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-035-1',
          url: '/images/dress/CO-035-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-035-2',
          url: '/images/dress/CO-035-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-036",
      title: 'CO-036',
      images: [
        {
          id: 'CO-036-0',
          url: '/images/dress/CO-036-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-036-1',
          url: '/images/dress/CO-036-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-036-2',
          url: '/images/dress/CO-036-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-040",
      title: 'CO-040',
      images: [
        {
          id: 'CO-040-0',
          url: '/images/dress/CO-040-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-040-1',
          url: '/images/dress/CO-040-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-040-2',
          url: '/images/dress/CO-040-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-041",
      title: 'CO-041',
      images: [
        {
          id: 'CO-041-0',
          url: '/images/dress/CO-041-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-041-1',
          url: '/images/dress/CO-041-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-041-2',
          url: '/images/dress/CO-041-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-042",
      title: 'CO-042',
      images: [
        {
          id: 'CO-042-0',
          url: '/images/dress/CO-042-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-042-1',
          url: '/images/dress/CO-042-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-042-2',
          url: '/images/dress/CO-042-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-043",
      title: 'CO-043',
      images: [
        {
          id: 'CO-043-0',
          url: '/images/dress/CO-043-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-043-1',
          url: '/images/dress/CO-043-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-043-2',
          url: '/images/dress/CO-043-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-044",
      title: 'CO-044',
      images: [
        {
          id: 'CO-044-0',
          url: '/images/dress/CO-044-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-044-1',
          url: '/images/dress/CO-044-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-044-2',
          url: '/images/dress/CO-044-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-045",
      title: 'CO-045',
      images: [
        {
          id: 'CO-045-0',
          url: '/images/dress/CO-045-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-045-1',
          url: '/images/dress/CO-045-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-045-2',
          url: '/images/dress/CO-045-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-047",
      title: 'CO-047',
      images: [
        {
          id: 'CO-047-0',
          url: '/images/dress/CO-047-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-047-1',
          url: '/images/dress/CO-047-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-047-2',
          url: '/images/dress/CO-047-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-048",
      title: 'CO-048',
      images: [
        {
          id: 'CO-048-0',
          url: '/images/dress/CO-048-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-048-1',
          url: '/images/dress/CO-048-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-048-2',
          url: '/images/dress/CO-048-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-049",
      title: 'CO-049',
      images: [
        {
          id: 'CO-049-0',
          url: '/images/dress/CO-049-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-049-1',
          url: '/images/dress/CO-049-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-049-2',
          url: '/images/dress/CO-049-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-050",
      title: 'CO-050',
      images: [
        {
          id: 'CO-050-0',
          url: '/images/dress/CO-050-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-050-1',
          url: '/images/dress/CO-050-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-050-2',
          url: '/images/dress/CO-050-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
  ],
}

export const volumeDressGallery = {
  title: 'ボリュームドレス',
  contents: [
    {
      id: "CO-006",
      title: 'CO-006',
      images: [
        {
          id: 'CO-006-0',
          url: '/images/dress/CO-006-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-006-1',
          url: '/images/dress/CO-006-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-006-2',
          url: '/images/dress/CO-006-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-010",
      title: 'CO-010',
      images: [
        {
          id: 'CO-010-0',
          url: '/images/dress/CO-010-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-010-1',
          url: '/images/dress/CO-010-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-010-2',
          url: '/images/dress/CO-010-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-011",
      title: 'CO-011',
      images: [
        {
          id: 'CO-011-0',
          url: '/images/dress/CO-011-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-011-1',
          url: '/images/dress/CO-011-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-011-2',
          url: '/images/dress/CO-011-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-018",
      title: 'CO-018',
      images: [
        {
          id: 'CO-018-0',
          url: '/images/dress/CO-018-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-018-1',
          url: '/images/dress/CO-018-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-018-2',
          url: '/images/dress/CO-018-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-021",
      title: 'CO-021',
      images: [
        {
          id: 'CO-021-0',
          url: '/images/dress/CO-021-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-021-1',
          url: '/images/dress/CO-021-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-021-2',
          url: '/images/dress/CO-021-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-022",
      title: 'CO-022',
      images: [
        {
          id: 'CO-022-0',
          url: '/images/dress/CO-022-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-022-1',
          url: '/images/dress/CO-022-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-022-2',
          url: '/images/dress/CO-022-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-023",
      title: 'CO-023',
      images: [
        {
          id: 'CO-023-0',
          url: '/images/dress/CO-023-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-023-1',
          url: '/images/dress/CO-023-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-023-2',
          url: '/images/dress/CO-023-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-024",
      title: 'CO-024',
      images: [
        {
          id: 'CO-024-0',
          url: '/images/dress/CO-024-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-024-1',
          url: '/images/dress/CO-024-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-024-2',
          url: '/images/dress/CO-024-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-025",
      title: 'CO-025',
      images: [
        {
          id: 'CO-025-0',
          url: '/images/dress/CO-025-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-025-1',
          url: '/images/dress/CO-025-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-025-2',
          url: '/images/dress/CO-025-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-026",
      title: 'CO-026',
      images: [
        {
          id: 'CO-026-0',
          url: '/images/dress/CO-026-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-026-1',
          url: '/images/dress/CO-026-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-026-2',
          url: '/images/dress/CO-026-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
    {
      id: "CO-028",
      title: 'CO-028',
      images: [
        {
          id: 'CO-028-0',
          url: '/images/dress/CO-028-0.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-028-1',
          url: '/images/dress/CO-028-1.jpg',
          width: 394,
          height: 541,
        },
        {
          id: 'CO-028-2',
          url: '/images/dress/CO-028-2.jpg',
          width: 394,
          height: 541,
        },
      ]
    },
  ],
}

export const headAccessoriesGallery = {
  title: 'ヘッドアクセサリ',
  contents: [
    {
      id: "H-08",
      title: 'H-08',
      images: [
        {
          id: 'H-08-0',
          url: '/images/dress/H-08.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-13",
      title: 'H-13',
      images: [
        {
          id: 'H-13-0',
          url: '/images/dress/H-13.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-101",
      title: 'H-101',
      images: [
        {
          id: 'H-101-0',
          url: '/images/dress/H-101.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-102",
      title: 'H-102',
      images: [
        {
          id: 'H-102-0',
          url: '/images/dress/H-102.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-103",
      title: 'H-103',
      images: [
        {
          id: 'H-103-0',
          url: '/images/dress/H-103.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-104",
      title: 'H-104',
      images: [
        {
          id: 'H-104-0',
          url: '/images/dress/H-104.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-105",
      title: 'H-105',
      images: [
        {
          id: 'H-105-0',
          url: '/images/dress/H-105.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-106",
      title: 'H-106',
      images: [
        {
          id: 'H-106-0',
          url: '/images/dress/H-106.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-107",
      title: 'H-107',
      images: [
        {
          id: 'H-107-0',
          url: '/images/dress/H-107.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-108",
      title: 'H-108',
      images: [
        {
          id: 'H-108-0',
          url: '/images/dress/H-108.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-109",
      title: 'H-109',
      images: [
        {
          id: 'H-109-0',
          url: '/images/dress/H-109.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-110",
      title: 'H-110',
      images: [
        {
          id: 'H-110-0',
          url: '/images/dress/H-110.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-111",
      title: 'H-111',
      images: [
        {
          id: 'H-111-0',
          url: '/images/dress/H-111.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-112",
      title: 'H-112',
      images: [
        {
          id: 'H-112-0',
          url: '/images/dress/H-112.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-113",
      title: 'H-113',
      images: [
        {
          id: 'H-113-0',
          url: '/images/dress/H-113.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
    {
      id: "H-114",
      title: 'H-114',
      images: [
        {
          id: 'H-114-0',
          url: '/images/dress/H-114.jpg',
          width: 477,
          height: 335,
        },
      ]
    },
  ],
}

export const earringGallery = {
  title: 'イヤリング',
  contents: [
    {
      id: "E-01",
      title: 'E-01',
      images: [
        {
          id: 'E-01-0',
          url: '/images/dress/E-01.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-03",
      title: 'E-03',
      images: [
        {
          id: 'E-03-0',
          url: '/images/dress/E-03.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-05",
      title: 'E-05',
      images: [
        {
          id: 'E-05-0',
          url: '/images/dress/E-05.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-06",
      title: 'E-06',
      images: [
        {
          id: 'E-06-0',
          url: '/images/dress/E-06.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-9",
      title: 'E-9',
      images: [
        {
          id: 'E-9-0',
          url: '/images/dress/E-9.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-10",
      title: 'E-10',
      images: [
        {
          id: 'E-10-0',
          url: '/images/dress/E-10.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-11",
      title: 'E-11',
      images: [
        {
          id: 'E-11-0',
          url: '/images/dress/E-11.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-12",
      title: 'E-12',
      images: [
        {
          id: 'E-12-0',
          url: '/images/dress/E-12.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-13",
      title: 'E-13',
      images: [
        {
          id: 'E-13-0',
          url: '/images/dress/E-13.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-14",
      title: 'E-14',
      images: [
        {
          id: 'E-14-0',
          url: '/images/dress/E-14.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-15",
      title: 'E-15',
      images: [
        {
          id: 'E-15-0',
          url: '/images/dress/E-15.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-16",
      title: 'E-16',
      images: [
        {
          id: 'E-16-0',
          url: '/images/dress/E-16.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-17",
      title: 'E-17',
      images: [
        {
          id: 'E-17-0',
          url: '/images/dress/E-17.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-18",
      title: 'E-18',
      images: [
        {
          id: 'E-18-0',
          url: '/images/dress/E-18.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "É-19",
      title: 'É-19',
      images: [
        {
          id: 'É-19-0',
          url: '/images/dress/É-19.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "É-20",
      title: 'É-20',
      images: [
        {
          id: 'É-20-0',
          url: '/images/dress/É-20.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-21",
      title: 'E-21',
      images: [
        {
          id: 'E-21-0',
          url: '/images/dress/E-21.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-22",
      title: 'E-22',
      images: [
        {
          id: 'E-22-0',
          url: '/images/dress/E-22.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
    {
      id: "E-23",
      title: 'E-23',
      images: [
        {
          id: 'E-23-0',
          url: '/images/dress/E-23.jpg',
          width: 477,
          height: 269,
        },
      ]
    },
  ],
}

export const tuxedoGallery = {
  title: 'タキシード',
  contents: [
    {
      id: "TX-001",
      title: 'TX-001',
      images: [
        {
          id: 'TX-001-0',
          url: '/images/dress/TX-001.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-002",
      title: 'TX-002',
      images: [
        {
          id: 'TX-002-0',
          url: '/images/dress/TX-002.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-003",
      title: 'TX-003',
      images: [
        {
          id: 'TX-003-0',
          url: '/images/dress/TX-003.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-004",
      title: 'TX-004',
      images: [
        {
          id: 'TX-004-0',
          url: '/images/dress/TX-004.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-005",
      title: 'TX-005',
      images: [
        {
          id: 'TX-005-0',
          url: '/images/dress/TX-005.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-006",
      title: 'TX-006',
      images: [
        {
          id: 'TX-006-0',
          url: '/images/dress/TX-006.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-007",
      title: 'TX-007',
      images: [
        {
          id: 'TX-007-0',
          url: '/images/dress/TX-007.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-008",
      title: 'TX-008',
      images: [
        {
          id: 'TX-008-0',
          url: '/images/dress/TX-008.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-009",
      title: 'TX-009',
      images: [
        {
          id: 'TX-009-0',
          url: '/images/dress/TX-009.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-010",
      title: 'TX-010',
      images: [
        {
          id: 'TX-010-0',
          url: '/images/dress/TX-010.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-012",
      title: 'TX-012',
      images: [
        {
          id: 'TX-012-0',
          url: '/images/dress/TX-001.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-013",
      title: 'TX-013',
      images: [
        {
          id: 'TX-013-0',
          url: '/images/dress/TX-013.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-015",
      title: 'TX-015',
      images: [
        {
          id: 'TX-015-0',
          url: '/images/dress/TX-015.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-016",
      title: 'TX-016',
      images: [
        {
          id: 'TX-016-0',
          url: '/images/dress/TX-016.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-017",
      title: 'TX-017',
      images: [
        {
          id: 'TX-017-0',
          url: '/images/dress/TX-017.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-019",
      title: 'TX-019',
      images: [
        {
          id: 'TX-019-0',
          url: '/images/dress/TX-019.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-020",
      title: 'TX-020',
      images: [
        {
          id: 'TX-020-0',
          url: '/images/dress/TX-020.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
    {
      id: "TX-021",
      title: 'TX-021',
      images: [
        {
          id: 'TX-021-0',
          url: '/images/dress/TX-021.jpg',
          width: 477,
          height: 605,
        },
      ]
    },
  ],
}

export const baseDressSize = {
  title: dedent`
    Free
    (7～13号)
  `,
  contents: [
    {
      id: 'baseDressSize1',
      title: 'バスト',
      text: '80～93cm'
    },
    {
      id: 'baseDressSize2',
      title: 'ウエスト',
      text: '60～75cm'
    },
    {
      id: 'baseDressSize3',
      title: 'スカート丈',
      text: '113cm'
    },
  ]
}
export const blouseSize = {
  title: dedent`
    Free
    (7～13号)
  `,
  contents: [
    {
      id: 'blouseSize1',
      title: 'バスト',
      text: '80～93cm'
    },
    {
      id: 'blouseSize2',
      title: 'ウエスト',
      text: '60～75cm'
    },
    {
      id: 'blouseSize3',
      title: '背丈',
      text: '35～50cm'
    },
    {
      id: 'blouseSize4',
      title: '袖丈',
      text: '50～57cm'
    },
    {
      id: 'blouseSize5',
      title: 'アームホール',
      text: '40～45cm'
    },
    {
      id: 'blouseSize6',
      title: '腕まわり',
      text: '30～35cm'
    },
  ]
}
export const skirtSize = {
  title: dedent`
    Free
    (7～13号)
  `,
  contents: [
    {
      id: 'skirtSize1',
      title: 'ウエスト',
      text: '60～75cm'
    },
    {
      id: 'skirtSize2',
      title: 'スカート丈',
      text: '115～125cm'
    },
  ]
}