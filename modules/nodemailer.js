const nodemailer = require('nodemailer'); // отпавка писем

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true for 465
    auth: {
      user: 'test-nodemailer@yandex.ru',
      pass: 'nodemailer',
    },
  },
  {
    from: 'Mailer Test <test-nodemailer@yandex.ru>',
  },
);

const mailer = (message) => {
  // eslint-disable-next-line consistent-return
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;