const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  auth: {
    user: "abubakarzafar2029@gmail.com",
    pass: "",
  },
});

const sendOtp = (email, otp) => {
  const mailOptions = {
    from: "abubakarzafar2029@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendOtp;
