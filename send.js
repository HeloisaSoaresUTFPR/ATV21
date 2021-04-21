const nodemailer = require('nodemailer');
const fs = require('fs').promises;

async function lerEmail() {

    let arquivo = await fs.readFile('email.txt', 'utf-8')
    console.log(arquivo);
    return arquivo.split('\n');

}

async function lerTitulo() {

    let arquivo = await fs.readFile('titulo.txt', 'utf-8')
    console.log(arquivo);
    return arquivo

}

async function lerCorpo() {

    let arquivo = await fs.readFile('corpo.txt', 'utf-8')
    console.log(arquivo);
    return arquivo

}
//Para cada um dos N endereços:
//4.1 - Envie uma única mensagem de e-mail por vez, usando o título e o corpo lido
//4.2 - aguarde 2 segundos antes de enviar a próxima mensagem /
//(use o waitFor da aula)

async function mensagem(email, corpo, titulo, transporter) {
    setTimeout(() => {
        
        const info =  transporter.sendMail({

            from: 'Alfredo Russel <alfredo.russel56@ethereal.email>',
            to: email,
            subject: titulo,
            text: corpo
    
        })
    
       console.log(info.messageId);
    }, 2000)

}

async function main() {
    const emails = await lerEmail();
    const titulo = await lerTitulo();
    const corpo = await lerCorpo();
    

    const transporter = nodemailer.createTransport({

        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'alfredo.russel56@ethereal.email',
            pass: 'T2CB4WEBkc2jkfJ8Ev'
        }
    });

    emails.forEach(email => {
        mensagem(email, corpo, titulo, transporter)
        
    })
}
main().catch(console.log);
