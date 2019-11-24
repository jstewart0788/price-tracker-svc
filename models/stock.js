const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  symbol: String,
  purchasePrice: Number,
  Shares: Number
});

const model = mongoose.model("stock", schema);
module.exports = model;