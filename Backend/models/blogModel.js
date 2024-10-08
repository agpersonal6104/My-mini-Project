const { model,Schema } = require('../connections');

const mySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: false
    },
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

const blogModel = model('Blog', mySchema);