import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_7LMbe6u4_HuxHSayS2beN6rp5D2T6tdYF'); // Resend.com'dan alacağın anahtar

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { donorFullName, donorEmail, donorPhone, amount, projectTitle } = body;

        await resend.emails.send({
            from: 'Insander Bağış <onboarding@resend.dev>',
            to: ['ahmetbozbay.work@gmail.com'], // Belirlediğin alıcı adresi
            subject: `Yeni Bağış Bildirimi: ${projectTitle}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #056134;">Yeni Bir Bağış Alındı!</h2>
                    <p><strong>Bağış Kategorisi:</strong> ${projectTitle}</p>
                    <p><strong>Bağış Miktarı:</strong> ${amount} TL</p>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <h3>Bağışçı Bilgileri</h3>
                    <p><strong>Ad Soyad:</strong> ${donorFullName}</p>
                    <p><strong>E-posta:</strong> ${donorEmail}</p>
                    <p><strong>Telefon:</strong> ${donorPhone}</p>
                    <br />
                    <p style="font-size: 12px; color: #999;">Bu mesaj Insander web sitesi bağış formu aracılığıyla gönderilmiştir.</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Mail gönderilirken hata oluştu" }, { status: 500 });
    }
}