console.log('get-post method with data from DataBase');

const express = require('express');
const app = express();
const db =require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // body parser gets data in correst format (needed format) and stores it in "req.body"

const Person = require('./models/person');
const menuItem = require('./models/menuItems');

app.get('/', function (req, res) {
  res.send('in the server')
}) 

  // post method
app.post('/person', async (req, res)=>{

  try {
  const data = req.body  // data collected in req.body

  // create a new person model (newPerson) like Person(which is previously defined in person.js)
  const newPerson = new Person(data);   // new person(data) : becouse , not to assign eatch data field personnaly

  //save the new person to the data base
  const responce = await newPerson.save();
  console.log("Data Saved!!");
  res.status(200).json(responce);
    
  } catch (error) { 
    console.log(error);
    res.status(500).json({error: "internal error"});
    
  }

  // Get mothod

  app.get('/person', async (req,res)=>{
    try {
          const data = await Person.find();
          console.log("Data retracted !!");
          res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: "internal error"});
    } 
  })
  
})

// for menuItems


 // post method
 app.post('/menuItems', async (req, res)=>{

  try {
  const data = req.body  // data collected in req.body

  // create a new person model (newPerson) like Person(which is previously defined in person.js)
  const newmenu = new menuItem(data);   // new person(data) : becouse , not to assign eatch data field personnaly

  //save the new person to the data base
  const responce = await newmenu.save();
  console.log("Data Saved!!");
  res.status(200).json(responce);
    
  } catch (error) { 
    console.log(error);
    res.status(500).json({error: "internal error"});
    
  }

  // Get mothod

  app.get('/menuItems', async (req,res)=>{
    try {
          const data = await menuItem.find();
          console.log("Data retracted !!");
          res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: "internal error"});
    } 
  })
  
})


app.listen(6900, ()=> { console.log("server is live on localhost:6900")} ); 