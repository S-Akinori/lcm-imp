import { MenuObjectProp } from "src/types/MenuProp"

interface FormInputs {
  id: string
  name: 'name' | 'kana' | 'email' | 'email_confirmation' | 'menus' | 'tel' | 'date' | 'place' | 'meeting' | 'body'
  type: string
  title: string
  placeholder?: string
  validation?: {
    [key: string]: any
  }
  inputs?: FormInputs[]
}

export const LPFormInputs: FormInputs[] = [
  {
    id: 'input1',
    type: 'text',
    name: 'name',
    title: 'お名前',
    placeholder: '',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'input2',
    type: 'text',
    name: 'kana',
    title: 'フリガナ',
    placeholder: '',
    validation: {
      required: '入力してください',
    }
  },
  {
    id: 'input3',
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
    id: 'input4',
    type: 'text',
    name: 'date',
    title: '挙式日（予定日でも可）',
    placeholder: '',
    validation: {
      required: '入力してください',
    }
  },
  {
    id: 'input5',
    type: 'textarea',
    name: 'meeting',
    title: 'オンライン相談希望日 (3候補ほど)',
    placeholder: '10/1 15:00 ~ 18:00\n10/3 12:00 ~ 18:00\n10/6 18:00 ~ 20:00',
    validation: {
      required: '入力してください',
    }
  },
]

export interface FormInputData {
  name: string
  kana: string
  email: string
  date: string
  price: number
  meeting: string
  menu: MenuObjectProp
}

export const generateOrderMail = (orderData: FormInputData) => {
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

export const generateOrderNotification = (orderData: FormInputData) => {
  const {orderText, menuText} = generateOrderDataText(orderData);
  const header = 'LPより注文がありました';
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

const generateOrderDataText = (orderData: FormInputData) => {
  const orderDataTitleObj = {
    name: 'お名前',
    kana: 'フリガナ',
    email: 'メールアドレス',
    menu: 'メニュー',
    price: '料金',
    date: '挙式日',
    meeting: 'ヒアリング希望日時',
  }
  const menuText = `
  【ムービーの種類】
  ${orderData.menu.movies.map(item => (item.title))}

  【ロケーション】
  ${orderData.menu.locations.map(item => (item.title))}
  
  【ロケーションの数】
  ${orderData.menu.locationOptions.map(item => (item.title))}

  【オプション】
  ${orderData.menu.options.map(item => (item.title))}

  【割引】
  ${orderData.menu.discounts.map(item => (item.title))}

  合計費用: ${orderData.price.toLocaleString()}円

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