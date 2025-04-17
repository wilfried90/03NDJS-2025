const users = []; // Stockage en mémoire

exports.getCurrentUser = (req, res) => {
  res.json({ email: req.user.email });
};

exports.getAllUsers = (req, res) => {
  res.json(users.map(user => ({ email: user.email })));
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(u => u.email === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted' });
};
