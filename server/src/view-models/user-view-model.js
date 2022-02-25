const ImageViewModel = require('./image-view-model');

class UserViewModel {
  constructor({ _id, email, role, name, surname, mainImg, createdAt, updatedAt }) {
    this.id = _id
    this.email = email;
    this.name = name;
    this.role = role;
    this.surname = surname;
    if (mainImg) {
      this.mainImg = new ImageViewModel(mainImg);
    }
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
