import { useState } from "react"
import { FieldError, SubmitHandler, useForm } from "react-hook-form"
import Layout from "src/components/Layout"
import Button from "src/components/parts/Button"
import ButtonRounded from "src/components/parts/Button/ButtonRounded"
import LoadingButton from "src/components/parts/Button/LoadingButton"
import Container from "src/components/parts/Container"
import Error from "src/components/parts/Error"
import Form from "src/components/parts/Form"
import InputGroup from "src/components/parts/Form/InputGroup"
import Input from "src/components/parts/Form/InputGroup/Input"
import InputLabel from "src/components/parts/Form/InputGroup/InputLabel"
import FV from "src/components/parts/FV"
import Title from "src/components/parts/Title"
import TitleAndText from "src/components/parts/TitleAndText"
import SNSList from "src/components/templates/SNSList"
import { contactFormInputs, subContactText } from "src/contents/contact"

interface InputData {
  name: string
  kana: StringConstructor
  body?: string
}

const ContactPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<InputData>()
  const [submimtMessage, setSubmitMessage] = useState('')
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    setSubmitMessage('')
    setLoading(true)
    const orderData = JSON.parse(JSON.stringify(data)) as InputData;
    const keys = Object.keys(orderData) as (keyof InputData)[]
    keys.forEach(key => {
      const value = orderData[key]
      if(Array.isArray(value)) {
        Object.assign(orderData, {[key]: value.join('\n')})
      }
    })
    try {
      const res = await fetch('/api/contactMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });
      setLoading(false)
      setSubmitMessage('お問い合わせを受け付けました。contact@impre.jpよりメールが送信されるのでご確認お願いします。メールが届かない場合、お手数ですがcontact@impre.jpまたはLINEよりお問い合わせください。')
    } catch(e) {
      setLoading(false)
      setSubmitMessage('エラーが発生しました。お手数ですが、お時間を空けて改めてご注文してください')
    }
  }
  return (
    <Layout
      pageTitle="お問い合わせ"
      pageDescription="完全オリジナルな結婚式ムービーの作成に関するご相談を受けています。アイデアやロケーションなど、気になる点はご相談ください。"
      h1="結婚式ムービー作成のお問い合わせ"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/contact.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/contact`}
    >
      <FV en="CONTACT" title="お問い合わせ" src="/images/contact.jpg" />
      <Container className="py-14 max-w-screen-lg">
        <section className="mb-12">
          <TitleAndText h2={subContactText.h2}>{subContactText.text}</TitleAndText>
        </section>
        <div className="mb-12">
          <div className="text-center mb-4">プランのお申込みは「申込フォーム」よりご連絡ください。</div>
          <div className="text-center"><Button href="/contact/order">お申込みはこちら</Button></div>
        </div>
        <div className="text-center mb-12">
          <div className="mb-4">LINEやインスタグラムでのお問い合わせ受け付けております。</div>
          <div className="w-max mx-auto"><SNSList /></div>
        </div>
        <div>
          <h2 className="text-center mb-12">お問い合わせ</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {contactFormInputs && contactFormInputs.map(formInput => (
              <InputGroup key={formInput.id} className="mb-8">
                {formInput.inputs && <div className="p-2 md:w-48 md:shrink-0">{formInput.title}</div>}
                {!formInput.inputs && <InputLabel className="md:w-48 md:shrink-0" htmlFor={formInput.id}>{formInput.title}</InputLabel>}
                {formInput.type === 'checkbox' && (
                  <>
                    <div> 
                      {formInput.inputs && formInput.inputs.map(input => (
                        <InputGroup className="items-center mb-0" key={input.id}>
                          <Input register={register} validation={formInput.validation} name={input.name} id={input.id} type='checkbox' defaultValue={input.title} />
                          <InputLabel htmlFor={input.id}>{input.title}</InputLabel>
                        </InputGroup>
                      ))}
                      {errors[formInput.name as keyof typeof errors] && (<Error>{(errors[formInput.name as keyof typeof errors] as FieldError).message}</Error>) }
                    </div>
                  </>
                )}
                {formInput.type !== 'checkbox' && (
                  <>
                    {!formInput.inputs && (
                      <div className="w-full">
                        <Input 
                          register={register} 
                          validation={formInput.validation} 
                          id={formInput.id}
                          name={formInput.name}
                          type={formInput.type}
                          placeholder={formInput.placeholder}
                        />
                        {errors[formInput.name as keyof typeof errors] && (<Error>{(errors[formInput.name as keyof typeof errors] as FieldError).message}</Error>) }
                      </div>
                    )}
                    {formInput.inputs && (
                      <>
                        <div className="w-full">
                          {formInput.inputs?.map((input, index) => (
                            <InputGroup key={input.id}>
                              <InputLabel className="md:shrink-0" htmlFor={input.id}>{input.title}</InputLabel>
                              <Input register={register} validation={input.validation} name={input.name} id={input.id} type={input.type} placeholder={input.placeholder} />
                            </InputGroup>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </InputGroup>
            ))}
            <div className="text-center">確認画面はございませんので、送信する前に内容をご確認ください。</div>
            <div className="text-center mt-8"><LoadingButton loading={loading} color="accent" className="bg-accent text-accent-cont">送信する</LoadingButton></div>
            {submimtMessage && (<div className="mt-4 p-4 border border-accent">{submimtMessage}</div>)}
          </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage