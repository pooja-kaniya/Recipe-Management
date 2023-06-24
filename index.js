const express = require("express");
const mongoose = require("mongoose");
const RecipeSchema = require("./models/Book");
const multer = require('multer');

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "BookStore",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
  const books = await RecipeSchema.find();
  res.render("Recipes.ejs", { books: books });
});

app.get("/Books/:id", async (req, res) => {
  const filteredbook = await RecipeSchema.find({ _id: req.params.id });
  res.render("RecipeDetails.ejs", { book: filteredbook[0] });
});

app.get("/add-book", (req, res) => {
  res.render("addRecipe.ejs");
});

app.post("/add-data", (req, res) => {
  RecipeSchema.insertMany(req.body);
  res.redirect("/");
});

app.get("/books/:id/edit", async (req, res) => {
  const filteredbook = await RecipeSchema.find({ _id: req.params.id });
  res.render("editRecipe.ejs", { book: filteredbook[0] });
});

app.post("/books/:id/upate-data", (req, res) => {
  RecipeSchema.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      console.log("Updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
});

app.post("/books/:id/method=DELETE", async (req, res) => {
  RecipeSchema.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Deleted successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});




// var storage = multer.diskStorage({
//   destination: function(req, file, cb){
//       cb(null, './uploads');
//   },
//   filename:function(req, file, cb){
//       cb(null, file.filednam+"_"+Date.now()+"_"+file.originalname);
//   },

//   });

// var upload = multer({
//   storage: storage,
// }).single("image");
// //insert an user in to database
// app.post('/add', upload, (req, res)=>{
//       const book= new books({
//       name: req.body.name,
//           });
// })



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
