const User = require('../models/User');

const getMe = (req, res) => {
  // L'utilisateur est attaché à la requête par le middleware d'authentification
  const { password, ...userWithoutPassword } = req.user;
  res.json(userWithoutPassword);
};

const getAllUsers = (req, res) => {
  const users = User.getAll().map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  res.json(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = User.deleteById(id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'User deleted' });
};

module.exports = { getMe, getAllUsers, deleteUser };

