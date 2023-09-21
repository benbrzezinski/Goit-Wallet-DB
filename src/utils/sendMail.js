const { createTransport } = require('nodemailer');

const sendMail = async (email, verificationToken) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_KEY,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'E-mail verification Wallet',
    html: `<p style="font-size:20px;">Verify your e-mail address by clicking on this link - <a href="http://localhost:${process.env.PORT}/wallet/api/users/verify/${verificationToken}" target="_blank" rel="noopener noreferrer nofollow"><strong>Verification Link</strong></a></p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`E-mail sent successfully. Response: ${info.response}`);
  } catch (err) {
    console.error(`Error sending e-mail: ${err.message}`);
  }
};

module.exports = sendMail;
