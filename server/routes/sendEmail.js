const express = require('express');
const sendEmail = express.Router();
const nodemailer = require('nodemailer');

const transport = {
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: process.env.THE_EMAIL,
		pass: process.env.THE_PASSWORD
	}
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
	if (error) {
		console.error(error);
	} 

	sendEmail.post('/', (req, res, next) => {
		console.log(req.body);
		const mail = {
			from: process.env.THE_EMAIL,
			to: 'kerimmind@gmail.com',
			subject: 'A new email from KodeKlub',
			text: `,
      from:
      ${req.body.fullname} 

      contact: ${req.body.email}

      message: ${req.body.message}`,
			html: `${req.body.message}`
		};

		transporter.sendMail(mail, (err, data) => {
			if (err) {
				res.json({
					status: 'fail'
				});
			} else {
				res.json({
					status: 'success'
				});
			}
		});
	});
});

module.exports = sendEmail;
