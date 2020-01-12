const sgMail = require('@sendgrid/mail')

const sendGridApi = process.env.SGMAILCRE

sgMail.setApiKey(sendGridApi)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aliakbarhiphop@gmail.com',
        subject: 'Thanks for Joing Task App',
        text: `Welcome to our app ${name}.Have a nice day`
    })
}

const sendGoodbyeMsg = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aliakbarhiphop@gmail.com',
        subject: 'Miss you :(',
        text: `We will Miss You ${name}...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeMsg
}