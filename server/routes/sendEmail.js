// const express = require('express');
// const sendEmail = express.Router();
// const nodemailer = require('nodemailer');

import nodemailer from "nodemailer"

// const transport = {
// 	host: 'smtp.gmail.com',
// 	port: 587,
// 	secure: false,
// 	auth: {
// 		user: process.env.THE_EMAIL,
// 		pass: process.env.THE_PASSWORD
// 	}
// };


const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 587,
    auth: {
		user: process.env.THE_EMAIL,
		pass: process.env.THE_PASSWORD
    }
})
//[1]

export default async (req, res) => {
	// const { senderMail, name, content, recipientMail } = req.body
	const { fullname, email, message } = req.body
//[2]

    // Check if fields are all filled
    if (fullname === "" || email === "" || message === "" ) {
        res.status(403).send("")
        return
    }
//[3]

	// const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
	const mailerRes = await mailer({ email, fullname, text: message  })
    res.send(mailerRes)
//[4]
}

const mailer = ({ fullname, email, text }) => {
    const from = fullname && email? `${fullname} <${email}>` : `${fullname || email}`
    const message = {
        from,
        to: 'kerimmind@gmail.com',
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}


// const transporter = nodemailer.createTransport(transport);
// transporter.verify((error, success) => {
// 	if (error) {
// 		console.error(error);
// 	} 

// 	sendEmail.post('/', (req, res, next) => {
// 		console.log(req.body);
// 		const mail = {
// 			from: process.env.THE_EMAIL,
// 			to: 'kerimmind@gmail.com',
// 			subject: 'A new email from KodeKlub',
// 			text: `,
//       from:
//       ${req.body.fullname} 

//       contact: ${req.body.email}

//       message: ${req.body.message}`,
// 			html: `${req.body.message}`
// 		};

// 		transporter.sendMail(mail, (err, data) => {
// 			if (err) {
// 				res.json({
// 					status: 'fail'
// 				});
// 			} else {
// 				res.json({
// 					status: 'success'
// 				});
// 			}
// 		});
// 	});
// });

// module.exports = sendEmail;
