import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log({ data });
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'lucasggmc@gmail.com', // Change to your recipient
      from: 'contato@lucascarneiro.com', // Change to your verified sender
      subject: `New Contact Received from : ${data}`,
      text: data,
      html: `<p>${data}</p>`,
    };
    sgMail.send(msg).catch((error: any) => {
      return NextResponse.json({ error }, { status: 500 });
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
