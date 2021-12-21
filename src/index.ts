import express from "express";

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json()); //so I can understand the json object that get to my server.
app.use(express.urlencoded({ extended: false })); //when an html form send me some data I can understand it

//Routes

//Static files

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server is up on port ${app.get("port")}`);
});
