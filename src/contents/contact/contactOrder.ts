export const contactOrderText = {
  h2: 'メニューが決まりましたらお問い合わせください',
  text: '結婚式ムービー制作ではムービー構成や段取り、撮影場所をお客様と一緒に考えていきます。\nプランがお決まりになりましたら、以下よりお問い合わせください。最高の思い出を創り上げましょう。'
}

interface OrderFormInputs {
  id: string
  name: 'name' | 'kana' | 'email' | 'email_confirmation' | 'menus' | 'tel' | 'date' | 'place' | 'meeting' | 'body'
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
      required: '入力してください'
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
    id: 'input3_1',
    type: 'text',
    name: 'tel',
    title: '電話番号',
    placeholder: '',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'input4',
    type: 'checkbox',
    name: 'menus',
    title: 'メニュー',
    placeholder: '',
    validation: {
      required: '入力してください',
    },
    inputs: [
      {
        id: 'menuArticle1',
        name: 'menus',
        type: 'checkbox',
        title: '前撮りプラン',
        placeholder: '',
      },
      {
        id: 'menuArticle2',
        name: 'menus',
        type: 'checkbox',
        title: 'ウェディングムービー制作',
        placeholder: '',
      },
      {
        id: 'menuArticle3',
        name: 'menus',
        type: 'checkbox',
        title: '取って出しエンドロールムービー制作',
        placeholder: '',
      },
      {
        id: 'menuArticle4',
        name: 'menus',
        type: 'checkbox',
        title: '当日記録写真・動画撮影',
        placeholder: '',
      },
      {
        id: 'menuArticle5',
        name: 'menus',
        type: 'checkbox',
        title: 'オーダーメイド編集',
        placeholder: '',
      },
      {
        id: 'menuArticle6',
        name: 'menus',
        type: 'checkbox',
        title: 'ウェディングムービー2本制作',
        placeholder: '',
      },
      {
        id: 'menuArticle7',
        name: 'menus',
        type: 'checkbox',
        title: '結婚式１日密着撮影',
        placeholder: '',
      },
    ]
  },
  {
    id: 'input5',
    type: 'text',
    name: 'date',
    title: '挙式日（予定日でも可）',
    placeholder: '2022年1月1日',
  },
  {
    id: 'input6',
    type: 'text',
    name: 'place',
    title: '式場（予定場所でも可）',
    placeholder: '東京都 アニヴェルセル表参道',
  },
  {
    id: 'input7',
    type: 'text',
    name: 'meeting',
    title: 'ヒアリング希望日時',
    placeholder: '2021年11月1日 18:00',
    validation: {
      required: '入力してください',
    },
  },
  {
    id: 'input8',
    type: 'textarea',
    name: 'body',
    title: 'ご質問',
    placeholder: '気になる点や相談したいことがありましたらお書きください',
  },
]

export const generateOrderMail = (orderData: OrderInputData) => {
  let orderText = '';
  for(let input of contactOrderFormInputs) {
    orderText += `
    【${input.title}】
    ${orderData[input.name as keyof OrderInputData]}
    `
  }
  const header = 'ご注文ありがとうございます';
  const text = `
    ご注文いただきありがとうございます！
    内容を確認し、24時間以内に今後の流れについてのメールを送信します。
    contact@impre.jpからのメールを受け取れるようにお願いします。

    ========ご注文控え===========
    ${orderText}
    ============================

    ------------------------------------
    株式会社imp
    HP: https://impre.jp
    ------------------------------------
  `.replace(/ /g, "")
  return {header, text}
}

export const generateOrderNotification = (contactData: OrderInputData) => {
  let orderText = '';
  for(let input of contactOrderFormInputs) {
    orderText += `
    【${input.title}】
    ${contactData[input.name as keyof OrderInputData]}
    `
  }
  const header = '注文がありました';
  const text = `
    ${orderText}
  `.replace(/ /g, "")
  return {header, text}
}

export interface OrderInputData {
  name: string
  kana: string
  email: string
  tel: string
  menus: string[]
  date?: string
  place?: string
  meeting: string
  body?: string
}