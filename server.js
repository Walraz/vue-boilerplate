const express = require('express')
const compression = require('compression')
const cors = require('cors')
const app = express()

require('dotenv').config({
  silent: true,
})

const PORT = process.env.PORT || 3000
const BASE_PATH = './dist/'

app.use(cors())
app.use(compression())

app.get('/ping', (req, res) => res.sendStatus(200))

app.use('/', express.static(`${BASE_PATH}`))
app.use('/login', express.static(`${BASE_PATH}login/`))
app.use('*', express.static(`${BASE_PATH}404/`))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))