const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
 name: String,
  ingredients: String,
  instructions: String,
  description: String,
  image: String
  
});

module.exports = mongoose.model("books", RecipeSchema);
