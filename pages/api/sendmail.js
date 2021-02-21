const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { fullname, email, message }  = req.body


  const content = {
    to: 'stephane@kodeklub.nl',
    from: 'stephane@kodeklub.nl',
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p><br></br><p></p><p>${fullname}</p>`
  }

  console.log('content', content)

  try {
      console.log('it stops here')
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
    console.log('message send to sendgrid')
  } catch (error) {
    console.log('ERROR', error)
    console.log('message not send to sendgrid')
    res.status(400).send('Message not sent.')
  }
}