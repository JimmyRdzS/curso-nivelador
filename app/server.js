var express = require('express')
var cowsay = require('cowsay');
var app = express()               

var port = process.env.PORT || 8080

var response = {
  title: 'Respuesta API',
  message: cowsay.say({
    text : '¡Hola Mundo!',
    e : "oO",
    T : "U "
    })
}

app.get('/', function(req, res) {
  res.json(response)   
})

app.post('/', function(req, res) {
  res.json(response)   
})

app.get('/cowsay', function(req, res) {
  res.json(response)   
})

app.post('/cowsay', function(req, res) {
  res.json(response)   
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)