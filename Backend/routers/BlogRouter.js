// Import required modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const blogModel = require('../models/blogModel'); // Import the updated blog model

// Create a new blog post
router.post('/add', async (req, res) => {

    console.log(req.body);
    
    new blogModel(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get all blog posts
router.get('/getall', async (req, res) => {
    try {
        const blogPosts = await blogModel.find().exec();
        res.send(blogPosts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get a single blog post by ID
router.get('/get/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const blogPost = await blogModel.findById(id).exec();
        if (!blogPost) {
            return res.status(404).send({ message: 'Blog post not found' });
        }
        res.send(blogPost);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a blog post
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const blogPost = await blogModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!blogPost) {
            return res.status(404).send({ message: 'Blog post not found' });
        }
        res.send(blogPost);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a blog post
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await blogModel.findByIdAndRemove(id).exec();
        res.status(204).send({ message: 'Blog post deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Handle image upload
router.post('/image', async (req, res) => {
    try {
        const image = req.body.image;
        const blogPost = await blogModel.findByIdAndUpdate(req.body.id, { image }, { new: true });
        if (!blogPost) {
            return res.status(404).send({ message: 'Blog post not found' });
        }
        res.send(blogPost);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;