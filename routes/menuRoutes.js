const express = require('express');
const router = express.Router(); // its a function in express

/* here we are taking all the person / endpoints functions for 
clear architecture to maintain */

const menuItem = require('./../models/menuItems');

// post method
router.post('/', async (req, res)=>{

    try {
    const data = req.body  
    const newmenu = new menuItem(data);   
  
    const responce = await newmenu.save();
    console.log("Data Saved!!");
    res.status(200).json(responce);
      
    } catch (error) { 
      console.log(error);
      res.status(500).json({error: "internal error"});
      
    }
  
    // Get mothod
  
    router.get('/', async (req,res)=>{
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

  // parameterised get call to the dtabase
  router.get('/:taste', async (req,res)=>{
    try {
        const data = req.params.taste; // to request the parameter given in above line of code 
        if (data== 'sweet' || data=='sour' || data=='spicy') {
            const responce = await menuItem.find({taste:data}); // find "work" where = workType parameter
            console.log("Data fetched !!");
            res.status(200).json(responce)
        } else {
            console.log(error);
            res.status(404).json({error: "Invalid parameter"});
        }
    } catch (error) {
      console.log(error);
      res.status(500).json({error: "internal error"});
    }
  })


  // put method (update)

  router.put('/:id', async (req, res)=>{
    try {
        
    const menuId = req.params.id;  // extract the id from the url parameter
    const menuDataToupdate = req.body; // data from body which is new 

    const responce = await menuItem.findByIdAndUpdate( menuId, menuDataToupdate, {
        new: true, // return the new updated data in responce
        runValidators: true, // run mongoose validation in menuitems.js
    })
    if(!responce){
        return res.status(404).json({error: 'Person not found'});
    }

    console.log("Data Updated !!");
    // res.sendStatus(200).json(responce);
    } catch (error) {
        console.log(error);
      res.status(500).json({error: "internal error"});
    }
    
  })


// Delete method

  router.delete('/:id', async (req,res)=>{ 
    try {
        const menuId = req.params.id; 
        const responce = await menuItem.findByIdAndDelete(menuId);
        if(!responce){
            console.log("Recoed not found");
            res.status(404).json({Message:'record not found'});
        }
        console.log("Record Deleted !!");
        res.status(200).json({Message:'Deleted successfully'});

    } catch (error) {
        console.log(error);
      res.status(500).json({error: "internal error"});
    }
  })

  module.exports = router;