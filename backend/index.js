// All needed imports
import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routes/booksRoute.js";
import cors from 'cors';


// Starting express for routing
const app = express();

// Middleware for parsing json requests
app.use(express.json());

// Middleware for handling cors policy
// // Allow all
app.use(cors('*'));

// Allow specific
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELET'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

// home 
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to MERN Stack Tutorial');
});

// book routes
app.use('/books', bookRouter);

// Connect to the db
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`Connected to mongooseBD`);

        // Run the express server and listen for visitors requests
        app.listen(PORT, ()=> {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });