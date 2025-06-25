const express = require('express');
const router = express.Router();
const {Menu} = require('./../models/menu');

router.post('', async (req, res) => {
    try{
        const data = req.body;
        const addItem = new Menu(data);

        const response = await addItem.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('', async (req, res) => {
    try{
        const data = await Menu.find();
        console.log('Data Fetched');

        res.status(200).json(data);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/:tasteType', async(req, res) => {
    try{
        const swad = req.params.tasteType;
        if(swad == 'Sweet' || swad == 'Tangy'){
            const response = await Menu.find({taste: swad});
            console.log('Response: ', response);
            res.status(200).json(response);
        } else{
            res.status(404).json('Swad not found.');
        }
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;