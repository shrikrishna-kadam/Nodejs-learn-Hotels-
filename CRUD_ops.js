console.log('get-post method with data from DataBase');

const express = require('express');
const app = express();
const db =require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // body parser gets data in correst format (needed format) and stores it in "req.body"


app.get('/', function (req, res) {
  res.send('Welcome to the Hotel !!!')
}) 

// for person
// for menuItems
/* for both person amd enuitems we have created
 seperate js as personRoutes and menuRoutes file and code in it , and imported them here*/
 
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuItemRoutes = require('./routes/menuRoutes');
app.use('/menu', menuItemRoutes);


app.listen(7000, ()=> { console.log("server is live on localhost:7000")} ); 