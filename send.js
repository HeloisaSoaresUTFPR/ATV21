/*  1- Leia do arquivo "emails.txt" uma lista de N endereços de e-mail,
 um por linha (para testar)
2- Leia do arquivo "titulo.txt" o título da mensagem que será enviada
3- Leia do arquivo "corpo.txt" o corpo da mensagem que será enviada
4- Para cada um dos N endereços:
    4.1 - Envie uma única mensagem de e-mail por vez, usando o título e o corpo lido
    4.2 - aguarde 2 segundos antes de enviar a próxima mensagem (use o waitFor da aula)

- Utilize async-await
- Crie uma conta de teste em https://ethereal.email para usar com o nodemailer
- Crie um projeto (npm init) e adicione as dependências necessárias.
- Envie aqui um arquivo .zip com o projeto ou o link para o projeto no github.  */


const nodemailer = require('nodemailer');
const fs = require('fs').promises;

async function lerEmail() {
    
    let arquivo = await fs.readFile('email.txt', 'utf-8')
    console.log(arquivo);

}
    
async function main() {
    lerEmail();
    const transporter = nodemailer.createTransport({

        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'alfredo.russel56@ethereal.email',
            pass: 'T2CB4WEBkc2jkfJ8Ev'
        }
    });



    const info = await transporter.sendMail({
        from: 'Alfredo Russel <alfredo.russel56@ethereal.email>',
        to: 'helosoarescosta@gmail.com',
        subject: 'Hello from Alfredo',
        text: 'OLAAAAAAAAAAAA!.'
    })

    console.log('Message ID:', info.messageId),
        console.log('Message URL', nodemailer.getTestMessageUrl(info));
}
main().catch(console.log);
