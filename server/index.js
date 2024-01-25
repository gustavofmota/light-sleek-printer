const express = require('express')
const cors = require('cors')
const app = express();

require('dotenv').config({ path: './config/SMTP.env' })
//Middleware
app.use(express.json())//req.body

app.use(cors())

app.use("/api",require("./routes/email"));

app.listen(5000, () => {
	console.log('Server has started on port 5000')
})