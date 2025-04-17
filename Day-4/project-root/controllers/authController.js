const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = []; // Stockage en mémoire

exports.registerUser = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = { email, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ email });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
};
