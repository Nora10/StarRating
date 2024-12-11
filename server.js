// Create a simple Express server that can handle GET and POST requests to retrieve and update the star rating.
// Store the ratings in-memory for simplicity, as it’s a dummy backend.

const express = require('express');
const cors = require('cors'); // This is optional but recommended for handling CORS
const app = express();
app.use(express.json());
app.use(cors()); // Enable all CORS requests, configure as needed for security

let rating = 0; // This will store the star rating

app.get('/rating', (req, res) => {
  res.json({ rating });
});

app.post('/rating', (req, res) => {
  rating = req.body.rating;
  res.json({ rating });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
