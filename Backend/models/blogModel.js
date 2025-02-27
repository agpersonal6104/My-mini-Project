const { model, Schema } = require('../connections');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: { 
        type: String,
        validate: {
            validator: function(v) {
                const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;
                return v == null || v.length < 1 || urlRegex.test(v); // Allow empty string
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    description: {
        type: String,
        required: true
    },
    content: { 
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: false
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

module.exports = model('blog', blogSchema);