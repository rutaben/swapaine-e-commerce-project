const BrandViewModel = require('../view-models/brand-view-model');
const CategoryViewModel = require('../view-models/category-view-model');
const ColorViewModel = require('../view-models/color-view-model');
const SizeViewModel = require('../view-models/size-view-model');

class ProductViewModel {
  constructor({ _id, name, price, category, size, color, brand, createdAt, updatedAt }) {
    this.id = _id;
    this.name = name;
    this.price = price;

    if (category) {
      this.category = new CategoryViewModel(category);
    }
    if (size) {
      this.size = new SizeViewModel(size);
    }
    if (color) {
      this.color = new ColorViewModel(color);
    }
    if (brand) {
      this.brand = new BrandViewModel(brand);
    }

    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ProductViewModel;
