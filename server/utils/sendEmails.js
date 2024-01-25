const nodeMailer = require('nodemailer')

const sendEmail = async (options) => {
	//make connection, imagine it like the bus taking in the people
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
	//bus gets the destination and the path and goes to it
	const mailOptions = {
		to: process.env.SMTP_MAIL,
		subject: options.subject,
		html: options.message + ' Sender: ' + options.from,
	}
	//bus arrives at final destination
	await transporter.sendMail(mailOptions)
}

module.exports = sendEmail
