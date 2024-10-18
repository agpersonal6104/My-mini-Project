const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: { type: String },
    description: {
        type: String,
        required: true
    },
    content: { 
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model
const blogModel = mongoose.model('Blog', blogSchema);

// Export the model
module.exports = blogModel;