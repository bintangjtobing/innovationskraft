import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Replace with your SMTP server hostname
  port: 465, // Replace with your SMTP server port
  secure: true, // Use secure connection (TLS)
  auth: {
    user: "innovations-kraft@octansidn.com", // Replace with your email address
    pass: "j@cAU9n@U9Wk7mS", // Replace with your email password
  },
});

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email here
    to: "innovations-kraft@octansidn.com",
    from: email,
    subject: "Hi there",
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
