import { useRouter } from "next/router"
import { ChangeEventHandler, FormEventHandler, useState } from "react"
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
import { contactOrderFormInputs, contactOrderText } from "src/contents/contact/contactOrder"

interface InputData {
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

const ContactOrderPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<InputData>()
  const [submimtMessage, setSubmitMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const { menuId } = router.query

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
      const res = await fetch('/api/orderMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });
      setLoading(false)
      setSubmitMessage('注文を受け付けました。contact@impre.jpよりメールが送信されるのでご確認お願いします。メールが届かない場合、お手数ですがcontact@impre.jpまたはLINEよりお問い合わせください。')
    } catch(e) {
      setLoading(false)
      setSubmitMessage('エラーが発生しました。お手数ですが、お時間を空けて改めてご注文してください')
    }
  }

  return (
    <Layout>
      <FV en="ORDER" title="プランお申込み" src="/images/order.jpg" />
      <Container className="py-14 max-w-screen-lg">
        <section className="mb-12">
          <TitleAndText h2={contactOrderText.h2}>{contactOrderText.text}</TitleAndText>
        </section>
        <div className="mb-12">
          <div className="text-center mb-4">ご相談などはお問い合わせフォームより受け付けております。</div>
          <div className="text-center"><Button href="/contact">お問い合わせはこちら</Button></div>
        </div>
        <div className="text-center mb-12">
          <div className="mb-4">LINEやインスタグラムでのお申込み、お問い合わせ受け付けております。</div>
          <div className="w-max mx-auto"><SNSList /></div>
        </div>
        <div>
          <h2 className="text-center mb-12">お申込み</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {contactOrderFormInputs && contactOrderFormInputs.map(orderInput => (
              <InputGroup key={orderInput.id} className="mb-8">
                {orderInput.inputs && <div className="p-2 md:w-60 md:shrink-0">{orderInput.title}</div>}
                {!orderInput.inputs && <InputLabel className="md:w-60 md:shrink-0" htmlFor={orderInput.id}>{orderInput.title}</InputLabel>}
                {orderInput.type === 'checkbox' && (
                  <>
                    <div> 
                      {orderInput.inputs && orderInput.inputs.map(input => (
                        <InputGroup className="items-center mb-0" key={input.id}>
                          <Input register={register} validation={orderInput.validation} name={input.name} id={input.id} type='checkbox' defaultValue={input.title} defaultChecked={input.id === menuId ? true : false} />
                          <InputLabel htmlFor={input.id}>{input.title}</InputLabel>
                        </InputGroup>
                      ))}
                      {errors[orderInput.name as keyof typeof errors] && (<Error>{(errors[orderInput.name as keyof typeof errors] as FieldError).message}</Error>) }
                    </div>
                  </>
                )}
                {orderInput.type !== 'checkbox' && (
                  <>
                    {!orderInput.inputs && (
                      <div className="w-full">
                        <Input 
                          register={register} 
                          validation={orderInput.validation} 
                          id={orderInput.id}
                          name={orderInput.name}
                          type={orderInput.type}
                          placeholder={orderInput.placeholder}
                        />
                        {errors[orderInput.name as keyof typeof errors] && (<Error>{(errors[orderInput.name as keyof typeof errors] as FieldError).message}</Error>) }
                      </div>
                    )}
                    {orderInput.inputs && (
                      <>
                        <div className="w-full">
                          {orderInput.inputs?.map((input, index) => (
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

export default ContactOrderPage