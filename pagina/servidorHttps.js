
const httpFunc = ()=>{
    const http = require('http')

    http.createServer((req, res)=>{
        res.send('Coma Alho, e se hidrate.')
    }).listen(2424);
    console.log('Servidor Online !')
}

module.exports = httpFunc