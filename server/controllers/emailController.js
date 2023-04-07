const router = require('express').Router();
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const {getErrorMessage} = require('../utils/errorUtils');



const auth = {
    auth: {
        api_key: 'a387d6495c1b63eab799204a7d1df11f-81bd92f8-3dcb00eb',
        domain: 'sandbox512be74e048145c9826f552c20c04af1.mailgun.org'
    }
}
const nodemailerMailgun = nodemailer.createTransport(mg(auth));

router.post('/send/email', async (req, res) => {
    const {fullName, email, emailContent} = req.body;

    const message = {
        from: email,
        to: "lilia.vvasileva@gmail.com",
        subject: `Запитване от ${fullName}`,
        text: emailContent,
    }

    nodemailerMailgun.sendMail(message, (err, info) => {
        if (err) {
            console.log(err)
            return res
                .status(400).json({error: getErrorMessage(err)});
        } else {
            return res.status(200).json('Sussessfully send mail')
        }
    });
});


module.exports = router;