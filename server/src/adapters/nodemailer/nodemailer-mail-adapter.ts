import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3e7404a618d1ca",
        pass: "19bde69d599f8e"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'João Vitor de Medeiros <jv.demed@gmail.com',
            subject,
            html: body
        });
    }
}
// `<div style='font-family: sans-serif; font-size: 16px; color: #111;'>`,
//                 `<p>Tipo de Feedback: ${type}</p>`,
//                 `<p>Comentário: ${comment}</p>`,
//                 `</div>`