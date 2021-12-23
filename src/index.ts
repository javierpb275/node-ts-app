import express from "express";
import { engine as exphbs } from "express-handlebars";
import path from "path";

//importing routes
import IndexRoutes from "./routes";
import BooksRoutes from "./routes/books";

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers"),
  })
);

app.set("view engine", ".hbs");

//Middlewares
app.use(express.json()); //so I can understand the json object that get to my server.
app.use(express.urlencoded({ extended: false })); //when an html form send me some data I can understand it

//Routes
app.use("/", IndexRoutes);
app.use("/books", BooksRoutes);

//Static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server is up on port ${app.get("port")}`);
});
