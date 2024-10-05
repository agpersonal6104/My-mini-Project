// Importing jsonwebtoken
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware function to verify token
const verifyToken = (req, res, next) => {
    // Get token from headers
    const token = req.headers['x-auth-token'];

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: 'Invalid token' });
        } else {
            req.user = payload;
            next();
        }
    });
};

module.exports = verifyToken;