import dedent from "dedent"
import { MenuPackage } from "src/types/Menu"
import { MenuObjectProp } from "src/types/MenuProp"

export const contactOrderText = {
  h2: 'メニューが決まりましたらお問い合わせください',
  text: '結婚式ムービー制作ではムービー構成や段取り、撮影場所をお客様と一緒に考えていきます。\nプランがお決まりになりましたら、以下よりお問い合わせください。最高の思い出を創り上げましょう。'
}

interface OrderFormInputs {
  id: string
  name: 'name' | 'kana' | 'email' | 'email_confirmation' | 'menu' | 'tel' | 'date' | 'place' | 'meeting' | 'body'
  type: string
  title: string
  placeholder?: string
  validation?: {
    [key: string]: any
  }
  inputs?: OrderFormInputs[]
}

export const contactOrderFormInputs: OrderFormInputs[] = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    title: 'お名前',
    placeholder: '',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'kana',
    type: 'text',
    name: 'kana',
    title: 'フリガナ',
    placeholder: '',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
    title: 'メールアドレス',
    placeholder: '',
    validation: {
      required: '入力してください',
      pattern: {
        value: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: '利用可能なメールアドレスを入力してください'
      }
    }
  },
  {
    id: 'tel',
    type: 'text',
    name: 'tel',
    title: '電話番号',
    placeholder: '',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'date',
    type: 'text',
    name: 'date',
    title: '挙式日（予定日でも可）',
    placeholder: '2022年1月1日',
  },
  {
    id: 'place',
    type: 'text',
    name: 'place',
    title: '式場（予定場所でも可）',
    placeholder: '東京都 アニヴェルセル表参道',
  },
  {
    id: 'meeting',
    type: 'textarea',
    name: 'meeting',
    title: 'ヒアリング希望日時',
    placeholder: '2022年12月1日 18:00 ~ 21:00\n2022年12月2日 15:00~18:00',
    validation: {
      required: '入力してください',
    },
  },
  {
    id: 'body',
    type: 'textarea',
    name: 'body',
    title: 'ご質問',
    placeholder: '気になる点や相談したいことがありましたらお書きください',
  },
]

export const generateOrderMail = (orderData: OrderInputData) => {
  const {orderText, menuText} = generateOrderDataText(orderData);
  const header = 'ご注文ありがとうございます';
  const text = `
    ご注文いただきありがとうございます！
    内容を確認し、24時間以内に今後の流れについてのメールを送信します。
    contact@impre.jpからのメールを受け取れるようにお願いします。

    数日経過し弊社よりメールが届かない場合、お手数ですがお電話やお問い合わせフォームよりご連絡ください。

    ========ご予定プラン==========
    ${menuText}
    ============================

    ========ご注文控え===========
    ${orderText}
    ============================

    ------------------------------------
    オーダーメイド結婚式ムービー | RING RING

    運営会社: 株式会社imp
    〒166-0012 東京都杉並区和田2-33-5
    EMAIL: contact@impre.jp
    TEL: 080-8499-7385
    HP: https://impre.jp
    ------------------------------------
  `.replace(/ /g, "")
  return {header, text}
}

export const generateOrderNotification = (orderData: OrderInputData) => {
  const {orderText, menuText} = generateOrderDataText(orderData);
  const header = '注文がありました';
  const text = `
  ========ご予定プラン==========

  ${menuText}
  
  ============================

  ========ご注文控え===========
  ${orderText}
  ============================
  `.replace(/ /g, "")
  return {header, text}
}

const generateOrderDataText = (orderData: OrderInputData) => {
  const orderDataTitleObj = {
    name: 'お名前',
    kana: 'フリガナ',
    email: 'メールアドレス',
    tel: '電話番号',
    menu: 'メニュー',
    price: '料金',
    date: '挙式日',
    place: '式場',
    meeting: 'ヒアリング希望日時',
    body: 'ご質問',
  }
  const menuText = dedent`
    「${orderData.menu.title}」

    【料金】
    ${orderData.menu.price.toLocaleString()}円

    【プランに含まれるもの】
    ${orderData.menu.includes.map(item => (item))}
  `;
  
  let orderText = '';
  const keys = Object.keys(orderData) as (keyof typeof orderData)[]
  keys.forEach(key => {
    if(key !== 'menu' && key !== 'price') {
      orderText += `
        【${orderDataTitleObj[key]}】
        ${orderData[key]}
      `
    }
  })
  return {menuText, orderText};
}

// const generateOrderDataText = (orderData: OrderInputData) => {
//   const orderDataTitleObj = {
//     name: 'お名前',
//     kana: 'フリガナ',
//     email: 'メールアドレス',
//     tel: '電話番号',
//     menu: 'メニュー',
//     price: '料金',
//     date: '挙式日',
//     place: '式場',
//     meeting: 'ヒアリング希望日時',
//     body: 'ご質問',
//   }
//   const menuText = `
//   【ムービーの種類】
//   ${orderData.menu.movies.map(item => (item.title))}

//   【ロケーション】
//   ${orderData.menu.locations.map(item => (item.title))}

//   【ロケーションの数】
//   ${orderData.menu.locationOptions.map(item => (item.title))}

//   【オプション】
//   ${orderData.menu.options.map(item => (item.title))}

//   【割引】
//   ${orderData.menu.discounts.map(item => (item.title))}

//   合計費用: ${orderData.price.toLocaleString()}円

//   `;
  
//   let orderText = '';
//   const keys = Object.keys(orderData) as (keyof typeof orderData)[]
//   keys.forEach(key => {
//     if(key !== 'menu' && key !== 'price') {
//       orderText += `
//         【${orderDataTitleObj[key]}】
//         ${orderData[key]}
//       `
//     }
//   })
//   return {menuText, orderText};
// }

export interface OrderInputData {
  name: string
  kana: string
  email: string
  tel: string
  menu: MenuPackage
  price: number
  date?: string
  place?: string
  meeting: string
  body?: string
}