class UserViewModel {
  constructor({ _id, email, role, name, surname, createdAt, updatedAt }) {
    this.id = _id
    this.email = email;
    this.name = name;
    this.role = role;
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
