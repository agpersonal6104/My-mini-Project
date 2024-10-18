// Import required modules
const express = require('express');
const blogModel = require('../models/blogModel');

const router = express.Router();

// Create a new blog post
router.post('/add', async (req, res) => {
    console.log(req.body);
    
    try {
        const newBlog = await blogModel.create(req.body);
        res.status(200).json(newBlog);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get all blog posts
router.get('/getall', async (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get a single blog post by ID
router.get('/get/:id', async (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// Update a blog post
router.put('/update/:id', async (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body,{new : true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete a blog post
router.delete('/delete/:id', async (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;