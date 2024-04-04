import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


// Route to save a new Book
router.post('/', async (request,response) => {
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
router.get('/', async (request, response) => {

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
router.get('/:id', async(request, response) => {
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
router.put('/:id', async(request, response) => {
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
router.delete('/:id', async(request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);
 
        if (!result) { 
            return response.status(404).json({ message: 'Book was not found' });
        }

        return response.status(200).send({ message: 'Book was deleted'});
    } catch(error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });

    }
    
});




export default router;