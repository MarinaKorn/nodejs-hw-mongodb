import nodemailer from 'nodemailer';
import { getEnvVar } from './getEnv.js';

const transporter = nodemailer.createTransport({
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: 'marynakorniyenko@ukr.net',
    pass: 'Ax@.e9TwK!hHs64',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendMail = async (jwtToken, email, user) => {
  try {
    const link = `${getEnvVar('APP_DOMAIN')}/reset-password?token=${jwtToken}`;
    return await transporter.sendMail({
      from: `"Maryna Korniyenko" <marynakorniyenko@ukr.net>`,
      to: email,
      subject: 'Hello ✔',
      text: 'Here is reset password link',
      html: `<b>Hello, ${user.name}</b><p>Click <a href="${link}">here</a> to reset password</p>`,
    });
  } catch (err) {
    console.log('Error sending email:', err);
  }
};
