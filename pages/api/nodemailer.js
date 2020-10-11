import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
    port: 587,
    auth: {
		user: process.env.THE_EMAIL,
		pass: process.env.THE_PASSWORD
    }
})

export default async (req, res) => {
    
    const { fullname, email, message } = req.body

    if (fullname === "" || email === "" || message === "" ) {
        res.status(403).send("")
        return
    }

	const mailerRes = await mailer({ email, fullname, text: message  })
    res.send(mailerRes)
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

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

