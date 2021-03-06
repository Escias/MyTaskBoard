const express = require('express')
require('dotenv').config({path: '.env'})
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const logger = require('./utils/logger')

const app = express()
const port = process.env.HTTP_PORT

// Middleware
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

// insert your router here
var cardsRouter = require('./routes/cards')

app.use('/cards', cardsRouter)

//other
let cards = new Cards()

app.get('/cards', function (req, res){
    cards = req.body
    res.end
})

app.listen(port, () => {
    logger.log(`API listening at http://localhost:${port}`)
})
  