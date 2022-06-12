import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { generateOrderMail, generateOrderNotification, OrderInputData } from 'src/contents/contact/contactOrder';

type Response = {
  message: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT as number | undefined,
  // secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});

interface ContactData {
  name: string
  email: string,
  content: string
}

const createMailMessage = (contactData: ContactData) => {
  const header = 'お問い合わせありがとうございます'
  const message = `
お問い合わせありがとうございます。
問い合わせ内容を確認し、24時間以内にご連絡します。
contact@impre.jpからのメールを受け取れるようにお願いします。
======== お問い合わせ控え ===========
【お名前】
${contactData.name}
【メールアドレス】
${contactData.email}
【お問い合わせ内容】
${contactData.content}
====================================
株式会社imp
HP: https://impre.jp
  `;
  return {header, message};
}
const createNotificationMessage = (contactData: ContactData) => {
  const header = 'お問い合わせがありました';
  const message = `
【お名前】
${contactData.name}
【メールアドレス】
${contactData.email}
【お問い合わせ内容】
${contactData.content}
  `
  return {header, message};
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const data: OrderInputData = req.body;
  const messageData = generateOrderMail(data);
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: data.email,
    subject: messageData.header,
    text: messageData.text,
  });
  console.log('messageId', info.messageId)
  if(info.messageId) {
    const notificationData = generateOrderNotification(data)
    const notification = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM,
      subject: notificationData.header,
      text: notificationData.text,
    });
  }
  res.status(200).json({ message: 'success'})
}