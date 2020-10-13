const express = require('express')
const path = require('path')
const app = express()
const port = 81

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`dev app listening on port ${port}!`))