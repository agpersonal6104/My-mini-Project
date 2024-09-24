const express = require('express');
const Model = require('../models/userModel');

const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
require('dotenv').config();

const router = express.Router();

router.post('/add', (req,res) => {
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getall', (req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json({
            message : 'Something went Wrong!'
        });
    });
});

router.get('/getbyid/:id', (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndRemove(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/authenticate', (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
   
        if(result){

            const {_id, name, email, password} = result;

            const payload = { _id, name, email, password};

            // generate Token
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json(err);
                    }
                    else {
                        res.status(200).json({token});
                    }
                }
            )
        }else
        {
            res.status(401).json({ message : 'Invalid Credentials!'})
        }
    }).catch((err) => {
        
    });
});

module.exports = router;