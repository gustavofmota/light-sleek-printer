const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	service: process.env.SMTP_SERVICE,
	secure: true,
	auth: {
		user: process.env.SMTP_MAIL,
		pass: process.env.SMTP_APP_PASS,
	},
})

const mailOptions = (to, subject, message) => {
	return { to, subject, html: message }
}

const sendEmail = async ({ to, subject, ...rest }) => {
	let message = rest.message + '<br/>' + rest.service
	await transporter.sendMail(mailOptions(to, subject, message))
}

// const sendEmailToClient = async (options) => {
// 	await transporter.sendMail(
// 		mailOptions(options.to, options.subject, options.message)
// 	)
// }

module.exports = sendEmail
// module.exports = sendEmailToClient
