const server = require('.pagina/servidorHttps')
console.log(server())

const express = require("express")
const app = express()

app.listen(2424)