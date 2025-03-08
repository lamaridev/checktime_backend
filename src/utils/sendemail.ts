import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

async function sendEmailWithAttachment(to:string, subject:string, text:string, filePath:string, fileName:string) {

    const transporter = nodemailer.createTransport({
        host: process.env.HOST_SMTP as string, 
        port: Number(process.env.PORT_SMTP), 
        auth: {
            user: process.env.USER_SMTP as string,
            pass: process.env.PASSWORD_SMTP as string,
        },
    } as SMTPTransport.Options);
    

    let mailOptions = {
        from: '"Votre Nom" <votre-email@example.com>',
        to: to,
        subject: subject,
        text: text,
        attachments: [
            {
                filename: fileName,
                path: filePath,
            },
        ],
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email envoyé: " + info.response);
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
    }
}
