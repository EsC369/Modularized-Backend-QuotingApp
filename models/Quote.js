const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema with validations:
const QuoteSchema = new Schema({
  name: {type: String, required: true, minlength: 2},
  quote: {type: String, required: true, minlength: 2},
}, {timestamps: true});

module.exports = Quote = mongoose.model("quote", QuoteSchema);