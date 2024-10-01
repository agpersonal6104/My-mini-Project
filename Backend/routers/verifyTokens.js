const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.header['x-auth-token']; // added a closing bracket
    if (!token) {
        return res.status(401).json({ message: 'No Token Provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: 'Token not Valid!' });
        } else {
            req.user = payload;
            next();
        }
    });
};

module.exports = verifyToken;