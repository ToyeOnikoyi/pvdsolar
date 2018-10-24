const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.post('/api/form',(req,res) => {
    console.log(req.body.email)

    let htmlEmail = `
        <h2>First Name: ${req.body.first_name}</h2>
        <h2>Last Name: ${req.body.last_name}</h2>
        <h2>email: ${req.body.email}</h2>
        <h2>number: ${req.body.phone}</h2>
        <p>message from customer: ${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user: 'Resolutelyrich@gmail.com',
            pass: 'Richie0602'
        }

    })

    let mailOptions = {
        from: req.body.email,   // senders address from contact form
        to: "Resolutelyrich@gmail.com",
        subject: "New Message From Solar Customer",
        text: req.body.message,   // senders message from contact form
        html: htmlEmail //html body
    }

    transporter.sendMail(mailOptions, (error,info)=> {
        if(error){
            console.log("send mail error: "+ error)
        }
        console.log("message sent: %s", info)
    })
})

const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Sever listening on port ${PORT}`)
})