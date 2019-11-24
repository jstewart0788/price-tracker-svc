const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  symbol: {
    type: String,
    index: true,
    unique: true
  },
  purchasePrice: Number,
  shares: Number
});

const model = mongoose.model("stock", schema);
module.exports = model;