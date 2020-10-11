const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.post('/api/form', (req, res) => {

    let data = req.body

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'gabrielrosaleslopez123@gmail.com',
            pass: 'crazygab12',
        }
    })

    let mailOptions = {
        from: data.email,
        to: 'gabrielrosaleslopez123@gmail.com',
        subject: `New service request from ${data.name}`,
        html: `

        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${data.name} </li>
        <li>Company Name: ${data.companyname} </li>
        <li>Email: ${data.email} </li>
        <li>Phone Number: ${data.phonenumber} </li>

        <h3>Request Description</h3>
        <p>${data.description}</p>

        `
    }

    transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.send('Success')
        }
    })

    transporter.close();

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})