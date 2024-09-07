// Importing Express
const express = require('express');
const UserRouter = require('../Backend/routers/UserRouter');
const cors = require('cors');

const app=express();

const port = 6000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

// 
app.use(express.json());
app.use('/user',UserRouter);

app.get('/', (req,res) => {
    res.send('Welcome to my project');
});

app.get('/getall', (req,res) => {
    res.send('All the conntent');
});

app.post('/add', (req,res) => {
    res.send('Addition of content');
});

app.put('/update/:id', (req,res) => {
    res.send('Update of content');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});