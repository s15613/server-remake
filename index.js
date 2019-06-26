require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 8000
const app = express()

const routerVideo = require('./routes')

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
 
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello baby =))')
}) 
app.use('/api/videos', routerVideo)

app.listen(port, () => console.log(`server is running ${port}`))