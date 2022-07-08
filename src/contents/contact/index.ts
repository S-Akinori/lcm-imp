export const topContactText = {
  en: 'CONTACT',
  h2: 'お気軽にお問い合わせください',
  text: 'プランが決まりましたら、LINEまたは申し込みフォームよりご連絡ください。\nご相談やご質問も受け付けておりますので、お気軽にご連絡ください。'
}

export const subContactText = {
  h2: 'お気軽にご相談ください',
  text: '結婚式ムービー制作に関して不安な点やご要望などがございましたらお気軽にお問い合わせください。\n'
}

export const contactContents = [
  {
    id: 'conact1',
    href: '/contact/order',
    linkText: 'お申込みはこちら'
  },
  {
    id: 'conact2',
    href: '/contact',
    linkText: 'ご相談はこちら'
  }
]

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

export const contactFormInputs: FormInputs[] = [
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
    id: 'input3',
    type: 'textarea',
    name: 'body',
    title: 'ご相談内容',
    placeholder: '',
    validation: {
      required: '入力してください',
    }
  },
]

export interface FormInputData {
  name: string
  email: string
  body?: string
}

export const generateContactMail = (contactData: FormInputData) => {
  let orderText = '';
  for(let input of contactFormInputs) {
    orderText += `
    【${input.title}】
    ${contactData[input.name as keyof FormInputData]}
    `
  }
  const header = 'お問い合わせありがとうございます';
  const text = `
    お問い合わせいただきありがとうございます。
    内容を確認し、24時間以内にご返信します。
    contact@impre.jpからのメールを受け取れるようにお願いします。

    ======== お問い合わせ控え ===========
    ${orderText}
    ====================================

    ------------------------------------
    オーダーメイド結婚式ムービー | RING RING

    運営会社: 株式会社imp
    〒166-0012 東京都杉並区和田2-33-5
    EMAIL: contact@impre.jp
    TEL: 080-6725-1692
    HP: https://impre.jp
    ------------------------------------
  `.replace(/ /g, "")
  return {header, text}
}

export const generateContactNotification = (contactData: FormInputData) => {
  let orderText = '';
  for(let input of contactFormInputs) {
    orderText += `
    【${input.title}】
    ${contactData[input.name as keyof FormInputData]}
    `
  }
  const header = 'お問い合わせがありました';
  const text = `
    ${orderText}
  `.replace(/ /g, "")
  return {header, text}
}