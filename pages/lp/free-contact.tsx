import { sendClickLPLineButton } from "lib/gtm"
import Head from "next/head"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { FieldError, SubmitHandler, useForm } from "react-hook-form"
import Layout from "src/components/Layout"
import LPLayout from "src/components/Layout/LPLayout"
import ActionButton from "src/components/parts/Button/ActionButton"
import LoadingButton from "src/components/parts/Button/LoadingButton"
import Container from "src/components/parts/Container"
import Error from "src/components/parts/Error"
import Form from "src/components/parts/Form"
import InputGroup from "src/components/parts/Form/InputGroup"
import Input from "src/components/parts/Form/InputGroup/Input"
import InputLabel from "src/components/parts/Form/InputGroup/InputLabel"
import SpeechBalloonWithImage from "src/components/parts/SpeechBalloonWithImage"
import Table from "src/components/parts/Table"
import TableRow from "src/components/parts/Table/TableRow"
import TableCell from "src/components/parts/Table/TableRow/TableCell"
import TextAndImage from "src/components/parts/TextAndImage"
import TextAndImageColumn from "src/components/parts/TextAndImage/TextAndImageColumn"
import TextAndImageOver from "src/components/parts/TextAndImage/TextAndImageOver"
import TextAndImageRotation from "src/components/parts/TextAndImage/TextAndImageRotation"
import TextAndImageRow from "src/components/parts/TextAndImage/TextAndImageRow"
import LPFV from "src/components/templates/LP/FV"
import LPTitle from "src/components/templates/LP/LPTitle"
import { contactFormInputs } from "src/contents/contact"
import { actionButtonContent } from "src/contents/lp/common"
import { LPFormInputs } from "src/contents/lp/form"
import { LPPlans } from "src/contents/lp/plan"
import { LPProblems } from "src/contents/lp/problems"
import { LPReasons } from "src/contents/lp/reasons"
import { LPServices } from "src/contents/lp/services"
import { LPThought } from "src/contents/lp/thought"
import { LPVoices } from "src/contents/lp/voices"

interface InputData {
  name: string
  kana: string
  email: string
  date: string
  body?: string
}

const LPFreeContactPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<InputData>()
  const [submimtMessage, setSubmitMessage] = useState<React.ReactNode>()
  const [loading, setLoading] = useState(false);
  const ref = useRef(null)

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if(ref && ref.current) {
      (ref.current as HTMLDivElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    console.log(data)
    setSubmitMessage('')
    setLoading(true)
    try {
      const res = await fetch('/api/contactMailLP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      console.log(resData)
      setLoading(false)
      setSubmitMessage((
        <>
          <p>お問い合わせ受け付けました。内容を確認後メールにてご連絡いたします。2営業日以内にご連絡がない場合お手数ですが、以下のメールまたはお電話よりお問い合わせください。</p>
          <p className="w-max mx-auto">
            Email: contact@impre.jp<br />
            Tel: 080-6725-1692
          </p>
        </>
      ))
    } catch(e) {
      setLoading(false)
      setSubmitMessage('エラーが発生しました。お手数ですが、改めてお問い合わせお願いします')
    }
  }
  return (
    <>
      <style jsx>{`
        .title-border {
          position: relative;
          margin-bottom: 2rem;
        }
        .title-border::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 1px;
          background: var(--accent-color);
        }
        .reasonsSection::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          background: var(--lp-main-color);
        }
        .service::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: -1;
          width: 100%;
          height: 70%;
          background: var(--main-color);
        }
        @media screen and (min-width: 768px) {
          .reasonsSection::after {
            bottom: 10%;
            height: 50%; 
          }
        }
      `}</style>
      <LPLayout
        pageTitle="結婚式ムービー制作の無料相談"
        pageDescription="結婚式ムービーをロケーション撮影やドローンを使い作成します。プロフィールムービーやオープニングムービーの無料相談をぜひお気軽にしてください"
        h1="テンプレートを使わない結婚式ムービー制作の無料相談"
        pageImg={`${process.env.NEXT_PUBLIC_HOME_URL}/images/lp/fv.jpg`}
        pagePath={`${process.env.NEXT_PUBLIC_HOME_URL}/lp/free-contact`}
        headerButton={{href: actionButtonContent.href, text: actionButtonContent.mainText}}
      >
        <LPFV src="/images/lp/fv.jpg">
          <h2 className={`relative mb-12 text-base-color text-3xl md:text-4xl !leading-loose`} style={{fontFamily: 'SoukouMincho'}}>人生に寄り添う<br />「わたしたちだけ」の<br className="md:hidden" />結婚式ムービーを</h2>
          <div className="relative border border-main px-4 py-12 mt-8">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-base whitespace-nowrap rounded-full md:text-lg">「撮影」も含め全員が「満足！」と回答！</div>
            <div className="relative text-center">
              <div className="text-base-color mb-4 text-lg">前撮り・ムービー共にロケーション撮影できるのはここだけ！</div>
              <ActionButton subText={actionButtonContent.subText} onClick={onClick}>{actionButtonContent.mainText}</ActionButton>
            </div>
          </div>
        </LPFV>
        <Container className="py-12">
          <LPTitle>こんなお悩み・ご希望ありませんか？</LPTitle>
          <div className="md:flex flex-wrap">
            {LPProblems && LPProblems.map(item => (
              <div key={item.id} className="md:w-1/3 p-4 mb-8">
                <SpeechBalloonWithImage src={item.src} alt={item.text}>
                  {item.text}
                </SpeechBalloonWithImage>
              </div>
            ))}
          </div>
          <div className="my-12 w-px h-12 bg-accent mx-auto"></div>
          <div className="text-xl text-center">わたしたち<br className="md:hidden" />「リンリン（RING RING）」<br className="md:hidden" />にお任せください</div>
        </Container>
        <div className="relative reasonsSection">
          <Container className="py-12">
            <LPTitle>リンリンが選ばれる理由</LPTitle>
            <div className="md:flex flex-wrap mb-4">
              {LPReasons && LPReasons.map((item, index) => (
                <div key={item.id} className="mb-8 md:w-1/3 p-4 relative">
                  <TextAndImageColumn src={item.src} alt={item.title}>
                    <h3 className="mb-0">{item.title}</h3>
                    <div>
                      <div>{item.text}</div>
                    </div>
                  </TextAndImageColumn>
                  <div className="absolute right-4 bottom-0 text-accent opacity-30" style={{fontFamily: 'Dancing Script, cursive', fontSize: '5rem', lineHeight: '1'}}>0{index + 1}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <ActionButton subText={actionButtonContent.subText} onClick={onClick}>{actionButtonContent.mainText}</ActionButton>
            </div>
          </Container>
        </div>
        <Container className="py-12">
          <LPTitle>リンリンは新郎新婦さまに寄り添い、「やりたい」を叶えます</LPTitle>
          <div className="mt-12">
            {LPServices && LPServices.map((item, index) => (
              <div key={item.id} className="mb-12 relative w-full md:p-4">
                <TextAndImageRow src={item.src} alt={item.title}>
                  <div className="md:mt-12 whitespace-pre-wrap">
                    <h3 className="title-border">{item.title}</h3>
                    <div>
                      <div>{item.text}</div>
                    </div>
                  </div>
                  <div className="absolute right-0 -top-6 rotate-12 text-accent leading-none text-5xl md:-right-8 md:top-0" style={{fontFamily: 'Dancing Script'}}>POINT{index + 1}</div>
                </TextAndImageRow>
              </div>
            ))}
          </div>
          <div className="text-center">
            <ActionButton subText={actionButtonContent.subText}>{actionButtonContent.mainText}</ActionButton>
          </div>
        </Container>
        <Container className="py-12">
          <LPTitle>プランの例</LPTitle>
          <div className="md:flex items-stretch">
            {LPPlans && LPPlans.map(plan => (
              <div key={plan.id} className="mt-12 md:p-4 md:w-1/3">
                <div className="relative border border-accent p-4 h-full">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-2 bg-white text-3xl text-accent" style={{fontFamily: 'Dancing Script'}}>{plan.title}</div>
                  <div className="py-4 text-accent text-xl text-center">{plan.price}</div>
                  <ul>
                    {plan.menus.map((item) => (
                        <li key={item.id}>【{item.title}】<br /> {item.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center text-xs mt-4">料金はすべて税込価格です。</div>
        </Container>
        <div className="bg-lp-main">
          <Container className="py-12">
            <LPTitle>多くのお客様から素敵なコメントをいただいています</LPTitle>
            <div className="mt-20">
              {LPVoices && LPVoices.map((item, index) => (
                <div key={item.id} className="mb-16 relative md:p-4">
                  <TextAndImageRotation src={item.src} alt={item.title}>
                    <div className="whitespace-pre-wrap">
                      <h3 className="title-border">{item.title}</h3>
                      <div>
                        <div>{item.text}</div>
                      </div>
                    </div>
                    <div className="mt-8 text-sm">
                      お名前: {item.person.name}<br />
                      ムービーの種類: {item.person.movieType}<br />
                      撮影場所: {item.person.location}<br />
                    </div>
                  </TextAndImageRotation>
                </div>
              ))}
            </div>
          </Container>
        </div>
        <Container className="py-20">
          <LPTitle>わたしたちの想い</LPTitle>
          <div className="text-center">
            <Image
              src="/images/image-members.jpg"
              width={1280}
              height={720}
            />
          </div>
          <p className="whitespace-pre-wrap mx-auto md:w-max">{LPThought.text}</p>
        </Container>
        <div className="bg-lp-main" ref={ref}>
          <Container className="py-12">
            <LPTitle>月4組限定です！まずはご相談ください！</LPTitle>
            <p>新郎新婦さまに寄り添って制作を行うため、毎月の申し込み数を4組までとさせていただいております。<br />ご相談は無料で行っていますので、まずはご相談ください！</p>
            <div className="text-center mt-8">
              <ActionButton href={actionButtonContent.href} subText={actionButtonContent.subText}>LINEでのお問い合わせはこちら</ActionButton>
            </div>
            <div className="mt-12">
              <h3 className="text-center">メールでお問い合わせ</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {LPFormInputs && LPFormInputs.map(formInput => (
                  <div key={formInput.id} className="mb-8">
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
                  </div>
                ))}
                <div className="text-center">確認画面はございませんので、送信する前に内容をご確認ください。</div>
                <div className="text-center mt-8"><LoadingButton loading={loading} color="accent" className="bg-accent text-accent-cont">送信する</LoadingButton></div>
                {submimtMessage && (<div className="mt-4 p-4 border border-accent">{submimtMessage}</div>)}
              </Form>
            </div>
          </Container>
        </div>
      </LPLayout>
    </>
  )
}

export default LPFreeContactPage