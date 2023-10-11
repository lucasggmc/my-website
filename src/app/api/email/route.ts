import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.PERSONAL_EMAIL,
      from: process.env.EMAIL_DOMAIN,
      subject: `Novo contato recebido do seu website : Nome:${data.name}, Email: ${data.email}`,
      text: data.message,
      html: `<p>${data.message}</p>`,
    };
    await sgMail
      .send(msg)
      // .then((res: any) => {
      //   console.log('res', res);
      //   return NextResponse.json({ message: res }, { status: 200 });
      // })
      .catch((error: any) => {
        return NextResponse.json({ error }, { status: 500 });
      });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
