console.log('creating server');

const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('in the server')
})

app.get('/bye', (req, res)=> { res.send('bye bye !!!') })    // either use "function " or "=."

app.get('/idli', (req, res)=>{
    let new_idli ={
        name:"rava idli",
        quantity: 6,
        price: 50,
        is_spicy : false,
        is_chutney : true,
        is_sambar: true
    }
    res.send(new_idli);             // is will send new_idli as a jSon in string format
})

app.listen(6900, ()=> { console.log("server is live on localhost:6900")} ); 