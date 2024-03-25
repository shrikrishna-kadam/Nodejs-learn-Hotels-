const express = require('express');
const router = express.Router(); // its a function in express

/* here we are taking all the person / endpoints functions for 
clear architecture to maintain */

const Person = require('./../models/person');
const { join } = require('lodash');
const { json } = require('body-parser');

 // post method
 router.post('/', async (req, res)=>{

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
  
    router.get('/', async (req,res)=>{
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

     // parameterised get call to the dtabase
     router.get('/:workType', async (req,res)=>{
        try {
            const workType = req.params.workType; // to request the parameter given in above line of code 
            if (workType== 'chef' || workType=='waiter' || workType=='manager') {
                const responce = await Person.find({work:workType}); // find "work" where = workType parameter
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

      //Update 

      router.put('/:id', async (req,res)=>{
        try {
            const idToUpdate = req.params.id;
            const dataToUpdate = req.body;
            const responce = await Person.findByIdAndUpdate( idToUpdate, dataToUpdate,{
                new : true,
                runValidators: true,
            })
            if(!responce){
                res.status(404).json({message:'Person not found.'})
            }
            console.log("Data Updated !!");
            // res.status(200).json(responce);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "internal error"});   
        }
      })
      
        // Delete method 

        router.delete('/:id', async (req,res)=>{
            try {
                const personId = req.params.id;
                const responce = await  Person.findByIdAndDelete(personId);
                if (!responce){
                    return res.status(404).json({error: "Person not found .."});
                }
                console.log("Record Deleted!!!");
                res.status(200).json({Message :'Deleted Successfully .'})
            } catch (error) {
                console.log(error);
                res.status(500).json({error: "internal error"});
            }
        })

      module.exports = router; 
