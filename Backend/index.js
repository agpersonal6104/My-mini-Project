// Importing Express
const express = require('express');
const UserRouter = require('../Backend/routers/UserRouter');
const BlogRouter = require('../Backend/routers/BlogRouter');
const ContactRouter = require('../Backend/routers/ContactRouter');
const cors = require('cors');

const app = express();

const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

// User middleware
app.use(express.json());
app.use('/user', UserRouter);

// Blog middleware
app.use(express.json());
app.use('/blog', BlogRouter);

// ContactUS Form Middleware
app.use(express.json());
app.use('/contacts', ContactRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my project');
});

app.get('/getall', (req, res) => {
    res.send('All the content');
});

app.post('/add', (req, res) => {
    res.send('Addition of content');
});

app.put('/update', (req, res) => {
    res.send('Update of content');
});

app.listen(port, () => {
    console.log(`Server is running`);
});