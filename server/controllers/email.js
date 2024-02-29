const sendEmailToClient = require('../utils/sendEmails')
const sendEmail = require('../utils/sendEmails')

require('dotenv').config()

exports.emailController = async (req, res) => {
	try {
		//content from user
		const { email, subject, message, service } = req.body
		if (!email) {
			return res.status(400).json({ message: 'Email is required' })
		}
		//make the options to send the email to owner
		/**
		 * from: Client
		 * to:Owner
		 * subject: self explanatory
		 * message: self explanatory
		 */
		const options = {
			from: email,
			to: process.env.SMTP_MAIL,
			subject,
			message,
			service,
		}

		await sendEmail(options)

		const autoSubject = 'SleekPrint: Request received'
		const autoMessage =
			"We've received your request.\nWe will answer as soon as we can.\n\nWish you the best,\nSleekPrint"

		// const options2 = {
		// 	from: process.env.SMTP_MAIL,
		// 	to: email,
		// 	subject: autoSubject,
		// 	message: autoMessage,
		// }
		// await sendEmailToClient(options2)

		res.status(200).json({ message: 'Check your Email' })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Internal server Error' })
	}
}
