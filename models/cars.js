const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  color: String,
  year: String,
  doors: String,
  image: String,
  onSale: Boolean,
});

const Cars = mongoose.model('Cars', carSchema);

module.exports = Cars;
