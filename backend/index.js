// All needed imports
import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

// Starting express for routing
const app = express();

// Middleware for parsing json requests
app.use(express.json());

// home 
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to MERN Stack Tutorial');
});

// Route to save a new Book
app.post('/books', async (request,response) => {
    try {
        // to make sure all the post data is available
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send ({
                message: 'Send all the required fields: title, author, publishYear',
            })
        }

        // create the book according to the schema 
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }

        // push it to the db
        const book = await Book.create(newBook);

        // show me the created db entry
        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all books from db
app.get('/books', async (request, response) => {

    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }
    
})

// Route to get a book from db
app.get('/books/:id', async(request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
})

// Route to update a book from db
app.put('/books/:id', async(request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send( {
                message: 'Send all the required fields: title, author, publishYear'
            });
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(500).send({ message: 'Book was not found'});
        }

        return response.status(200).send({ message: 'Book updated successfully'});

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a book from db
app.delete('/books/:id', async (res, req) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) { 
            return res.status(404).send({ message: 'Book was not found' });
        }

        return res.status(200).send({ message: 'Book was deleted '});
    } catch(err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });

    }
    
});


// Route to get a book from db
app.get('/books/:id', async(request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
})



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