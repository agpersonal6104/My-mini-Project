const { blogModel, Schema } = require('../connections');

const mySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedBy: {
        type: String,
        required: true
    },
    createdAt: Date.now()
});