import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: data.email,
      from: 'contato@lucascarneiro.com',
      subject: `Novo contato recebido do seu website : ${data.name}`,
      text: data.message,
      html: `<p>${data.message}</p>`,
    };
    sgMail.send(msg).catch((error: any) => {
      return NextResponse.json({ error }, { status: 500 });
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
