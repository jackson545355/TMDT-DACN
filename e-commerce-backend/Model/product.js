var mongoose = require('mongoose');

const Product = mongoose.model("Product", {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new_price: {
      type: Number
    },
    old_price: {
      type: Number
    },
    date: {
      type: Date,
      default: Date.now,
    },
    avilable: {
      type: Boolean,
      default: true,
    },
  });

module.exports = Product;