// Stockage en mémoire
let users = [];
let idCounter = 1;

class User {
  static create(email, password) {
    const user = { id: idCounter++, email, password };
    users.push(user);
    return user;
  }

  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static findById(id) {
    return users.find(user => user.id === id);
  }

  static getAll() {
    return [...users];
  }

  static deleteById(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    const deletedUser = users[userIndex];
    users = users.filter(user => user.id !== id);
    return deletedUser;
  }
}

module.exports = User;
