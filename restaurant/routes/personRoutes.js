const express = require('express');
const router = express.Router();

const {Person} = require('./../models/Person');

router.post('', async (req, res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('', async (req, res) => {
    try{
        const data = await Person.find();
        console.log('Data Fetched');

        res.status(200).json(data);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/:work', async (req, res) => {
    try{
        const workType = req.params.work;
        if(workType == 'Chef' || workType == 'Manager' || workType == 'Owner'){
            const response = await Person.find({designation: workType});
            console.log('Response fetch', response);
            res.status(200).json(response);
        } else{
            res.status(404).json({error: 'Invalid Designation'});
        }
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;