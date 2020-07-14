const express = require('express')
const exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

const app = express()
const PORT = process.env.PORT || 5000;

// Used to setup public page and use the css stylings
app.use(express.static("public"));

// Parse application body as JSON since we will be doing a post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up handlbars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//  Give access to routes 
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));