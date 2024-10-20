// Import required modules
const express = require('express');
const contactModel = require('../models/contactModel');

const router = express.Router();

router.post('/add', (req,res) => {
    console.log(req.body);
    
    new contactModel(req.body).save()
    .then((result) => {

        res.status(200).json(result);

    }).catch((err) => {

        console.log(err);
        if(err.ode === 11000)
        {
            res.status(500).json({message: 'Request already exists!'})
        }
        else{
            res.status(500).json({message : 'Something went wrong!'});
        }
        
    });
});

router.get('/getall', async (req, res) => {
    contactModel.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/get/:id', async (req, res) => {
    contactModel.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.put('/update/:id', async (req, res) => {
    contactModel.findByIdAndUpdate(req.params.id, req.body,{new : true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/delete/:id', async (req, res) => {
    contactModel.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;