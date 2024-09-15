// Import required modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const blogModel = require('../models/blogModel'); // Import the updated blog model

// Create a new blog post
router.post('/blog', async (req, res) => {
    try {
        const blogPost = new blogModel(req.body);
        await blogPost.save();
        res.status(201).send(blogPost);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all blog posts
router.get('/blog', async (req, res) => {
    try {
        const blogPosts = await blogModel.find().exec();
        res.send(blogPosts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get a single blog post by ID
router.get('/blog/:id', async (req, res) => {
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
router.put('/blog/:id', async (req, res) => {
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
router.delete('/blog/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await blogModel.findByIdAndRemove(id).exec();
        res.status(204).send({ message: 'Blog post deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Handle image upload
router.post('/blog/image', async (req, res) => {
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