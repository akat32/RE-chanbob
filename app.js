const express = require('express');
const fs = require('fs')
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
var router = require('./routes/index')(express,fs);
app.use('/', router);


app.listen(3355, ()=>{
  console.log('TC130 정신분열기 작동!')
})
