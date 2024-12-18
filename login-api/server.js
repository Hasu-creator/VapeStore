// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

// Dummy user data (in a real application, use a database)
const users = [
  {
    id: 1,
    username: 'user1',
    password: bcrypt.hashSync('password1', 8) // Hash the password
  },
  {
    id: 2,
    username: 'user2',
    password: bcrypt.hashSync('password2', 8)
  }
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(404).send({ message: 'User  not found.' });
  }

  // Check password
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  
  if (!passwordIsValid) {
    return res.status(401).send({ token: null, message: 'Invalid Password!' });
  }

  // Create a token
  const token = jwt.sign({ id: user.id }, 'secret-key', { expiresIn: 86400 }); // expires in 24 hours

  res.status(200).send({ id: user.id, username: user.username, accessToken: token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});