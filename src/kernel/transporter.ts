import NodeMailer from 'nodemailer';

/**
 * Create the transporter
 */
const Transporter = NodeMailer.createTransport(`smtps://${encodeURIComponent(process.env.MAIL_USER)}:${process.env.MAIL_PASS}@${process.env.MAIL_HOST}`);

/**
 * Export the transporter
 */
export default Transporter;