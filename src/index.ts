import express from 'express';

//Initializations
const app = express();

//Settings
app.set('port', 3000);

//Middlewares 

//Routes

//Static files 

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is up on port 3000`);
});