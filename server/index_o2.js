
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
const secretKey = 'your_secret_key';
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
const port = 5001;
app.use(cors());
// Example user data (for demonstration purposes)
// app.use(verifyToken);

const users = [
    { username: 'admin', password: 'password' }
];

// Authentication endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('Verifying token');
    console.log(token);

    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Unauthorized' });
        req.user = decoded.username;
        next();
    });
};

// Protected route example
// app.get('/api/data', verifyToken, (req, res) => {
//     console.log(req.headers.authorization);
//     res.json({ data: 'Protected data' });
// });

app.get('/api/data', (req, res, next) => {
    console.log(`hiiassa= ${req.headers.authorization}`);

    verifyToken(req, res, () => {
        // Call next() after verifyToken completes
        next();
    });
}, (req, res) => {
    res.json({ data: 'Protected data' });
});


// Assuming you have a route like this in your Express server


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});