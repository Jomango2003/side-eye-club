const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.use('/api/syets', require('./routes/syetRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))