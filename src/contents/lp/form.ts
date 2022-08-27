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
  body: string
}

export const generateContactMail = (contactData: FormInputData) => {
  let orderText = '';
  for(let input of LPFormInputs) {
    orderText += `
    【${input.title}】
    ${contactData[input.name as keyof FormInputData]}
    `
  }
  const header = 'お問い合わせありがとうございます';
  const text = `
    お問い合わせいただきありがとうございます。
    内容を確認しご返信します。
    contact@impre.jpからのメールを受け取れるようにお願いします。

    ======== お問い合わせ控え ===========
    ${orderText}
    ====================================

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

export const generateContactNotification = (contactData: FormInputData) => {
  let orderText = '';
  for(let input of LPFormInputs) {
    orderText += `
    【${input.title}】
    ${contactData[input.name as keyof FormInputData]}
    `
  }
  const header = 'LPよりお問い合わせがありました';
  const text = `
    ${orderText}
  `.replace(/ /g, "")
  return {header, text}
}