const { mongoose } = require('../connections');

const mySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        validate: {
            validator: (v) => {
                const urlRegex = ;
                return urlRegex.test(v);
            },
            message: '{VALUE} is not a valid URL'
        }
    },
    description: {
        type: String,
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const blogModel = mongoose.model('Blog', mySchema);