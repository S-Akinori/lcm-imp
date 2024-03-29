import { useRouter } from "next/router"
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react"
import { FieldError, SubmitHandler, useForm } from "react-hook-form"
import Layout from "src/components/Layout"
import Box from "src/components/parts/Box"
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
import Menu, { MenuItem } from "src/components/templates/Menu"
import MenuSummary from "src/components/templates/Menu/MenuSummary"
import SNSList from "src/components/templates/SNSList"
import { contactFormInputs, subContactText } from "src/contents/contact"
import { contactOrderFormInputs, contactOrderText } from "src/contents/contact/contactOrder"
import { menuPackages } from "src/contents/menu"
import { MenuPackage } from "src/types/Menu"
import { MenuObjectProp } from "src/types/MenuProp"

interface InputData {
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

const ContactOrderPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<InputData>()
  const [submimtMessage, setSubmitMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState<MenuPackage | null>(null)
  const router = useRouter();
  const { menuId } = router.query

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    setSubmitMessage('')
    setLoading(true)
    const modifiedData = {
      ...data, 
      menu: menu,
    }
    try {
      const res = await fetch('/api/orderMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedData)
      });
      setLoading(false)
      setSubmitMessage('注文を受け付けました。contact@impre.jpよりメールが送信されるのでご確認お願いします。メールが届かない場合、お手数ですがcontact@impre.jpまたはLINEよりお問い合わせください。')
    } catch(e) {
      setLoading(false)
      setSubmitMessage('エラーが発生しました。お手数ですが、お時間を空けて改めてご注文してください')
    }
  }

  const onClickCopyText = () => {
    const text = `
    ムービー作成のご依頼
    
    =======予定プラン=======
    ${menu?.title}

    【料金】
    ${menu?.price.toLocaleString()}円

    【プランに含まれるもの】
    ${menu?.includes.map(item => (item))}
    =======================

    =======お客様情報=======
    【お名前】
    〇〇

    【フリガナ】
    〇〇

    【挙式日（予定日も可）】
    〇〇

    【式場（予定場所でも可）】
    〇〇

    【ヒアリング希望日時 (候補3つほど) 】
    〇〇

    【ご質問等あればお書きください】

    =======================
    `.replace(/ /g, "")
    navigator.clipboard.writeText(text)
    .then(() => {
      alert('コピーしました');
    })
    .catch(() => {
      alert("コピーに失敗しました")
    })
  }

  useEffect(() => {
    const menuId = sessionStorage.getItem('menuId');
    if(menuId) {
      const menu = menuPackages.find(menu => menu.id === menuId);
      if(menu) setMenu(menu);
    }
  }, [])

  // useEffect(() => {
  //   const menuJson = sessionStorage.getItem('menus');
  //   const total = sessionStorage.getItem('total');
  //   if(menuJson && total) {
  //     const menu = JSON.parse(menuJson);
  //     setTotal(parseInt(total))
  //     setMenu(menu);
  //   }
  // }, [])

  return (
    <Layout
      pageTitle="プランお申込み"
      pageDescription="結婚式ムービーのプランが決まりましたらこちらよりお申込みください。LINEやインスタも可能です。おしゃれで感動するウェディングムービーを作りましょう。"
      h1="オーダーメイドの結婚式ムービーの依頼はこちら"
      pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/order.jpg`}
      pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/contact/order`}
    >
      <FV en="ORDER" title="プランお申込み" src="/images/order.jpg" />
      <Container className="py-14 max-w-screen-lg">
        <section className="mb-12">
          <TitleAndText h2={contactOrderText.h2}>{contactOrderText.text}</TitleAndText>
        </section>
        {!menu && (<Box className="p-4 mb-8">
          <div className="mb-4 text-center text-xl">まずはご自身に合うプランをお選びください！</div>
          <div className="text-center">
            <Button href="/menu" color="accent">メニューページへ</Button>
          </div>
        </Box>)
        }
        {menu && (
          <div className="mb-4">
            <div className="mb-8">
              <div className="text-center mb-4">選択中のプラン</div>
              <MenuItem isButton={false} menu={menu} />
            </div>
            <div className="text-center">
              <Button href="/menu" color="accent">プランの変更はこちら</Button>
            </div>
          </div>
        )}
        {/* {menu && (<MenuSummary menu={menu} total={total} />)} */}
        {/* <div className="mb-12">
          <div className="text-center mb-4">ご相談などはお問い合わせフォームより受け付けております。</div>
          <div className="text-center"><Button href="/contact">お問い合わせはこちら</Button></div>
        </div> */}
        <div className="text-center mb-12">
          <div className="mb-4">LINEやインスタグラムでのお申込み、お問い合わせ受け付けております。</div>
          {/* <div className="mb-4">LINE、インスタグラムでお申込みの際は、以下のボタンよりプラン内容をコピーしていただき、そのままペーストしてください。次に「お客様情報」の欄をご入力いただき送信してください</div>
          
          <ButtonRounded onClick={onClickCopyText} className="mb-8">プラン内容をコピー</ButtonRounded> */}
          <div className="w-max mx-auto"><SNSList /></div>
        </div>
        <div>
          <h2 className="text-center mb-12">お申込み</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {contactOrderFormInputs && contactOrderFormInputs.map(orderInput => (
              <div key={orderInput.id} className="mb-8">
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
              </div>
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