import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormInputData, generateOrderMail, generateOrderNotification } from 'src/contents/lp/order-plan/form';

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const data: FormInputData = req.body;
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