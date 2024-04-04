import React from 'react'
import { AIOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'


const BookModal = ({ book, onClose }) => {

    return (
        <div 
            className = 'fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick = {onClose}
        >
            <div
            onClick = {(event) => {event.stopPropagation()}}
            className = 'w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <div className='flex justify-start items-center gap-x-4 relative'>
                        <PiBookOpenTextLight className= "text-white size-11"/>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {book.title} </h2>
                        <h3 className='absolute top-2 right-2 px-2 py-1 bg-gray-400 text-white rounded-xl '> {book.publishYear} </h3>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <BiUserCircle className= " dark:text-gray-400 text-white size-4" />
                        <p className="my-1 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                    </div>

                    <div className='flex justify-between items-center gap-x-2 mt-4 p-2'>
                        <Link to = {`/books/details/${book._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800' />
                        </Link>
                        <Link to = {`/books/edit/${book._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600' />
                        </Link>
                        <Link to = {`/books/delete/${book._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600' />
                        </Link>
                    </div>
            </div>
            BookModal
        </div>
    )
}

export default BookModal