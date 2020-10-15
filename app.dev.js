const express = require('express')
const path = require('path')
const app = express()
// 部署时应改为80
const port = 81

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`dev app listening on port ${port}!`))