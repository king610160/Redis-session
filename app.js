const express = require('express')
const session = require('./middleware/session')
const router = require('./router/index')
const morgan = require('morgan')
const corsMw = require('./middleware/cors')

const app = express()

app.use(express.json())
// '*' means allow all whitelist's website
app.options('*', corsMw)
app.use(corsMw)

app.use(morgan('tiny'))
app.use(session)
app.use(router)

app.listen(3000, () => {
    console.log(`You have listening on port 3000.`)
})