const sendEmail = require("../utils/sendEmails");

require("dotenv").config();

exports.sendEmail = async (req,res) =>{
    try {
        //content from user
        const { email, message } = req.body;
        if(!email){
            return res.status(400).json({message:"Email is required"});
        }
        //make the options to send the email to owner
        /**
         * from: Client
         * to:Owner
         * subject: self explanatory
         * message: self explanatory
         */
        const options = {
            from:email,
            to:process.env.SMTP_MAIL,
            subject:"test",
            message:message,
        }

        await sendEmail(options)

        res.status(200).json({message:"Check your Email"});

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server Error"})
    }
}