import express from "express";
import exphbs from "express-handlebars";
import path from 'path';

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(express.json()); //so I can understand the json object that get to my server.
app.use(express.urlencoded({ extended: false })); //when an html form send me some data I can understand it

//Routes

//Static files

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server is up on port ${app.get("port")}`);
});
