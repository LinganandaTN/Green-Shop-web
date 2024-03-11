
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
const port = 5001;
app.use(cors());
// Example user data (for demonstration purposes)
// app.use(verifyToken);

const secretKey = 'your_secret_key'; // Replace with a secret key for JWT
// Authentication endpoint
app.post('/api/login', (req, res) => {
    // Verify user credentials
    const { username, password } = req.body;
    if (isValidCredentials(username, password)) {
        // Generate JWT token
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Function to validate user credentials (example implementation)
function isValidCredentials(username, password) {
    // Implement your logic to validate the credentials
    return (username === 'admin' && password === 'password');
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});