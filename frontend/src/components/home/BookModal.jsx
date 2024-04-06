import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'


const BookModal = ({ book, onClose }) => {

    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-fit bg-gray-900 rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-gray-400 cursor-pointer'
                    onClick={onClose}
                />
                <h3 className='w-fit px-2 py-1 ml-1 mt-1 bg-gray-400 text-white rounded-xl '> {book.publishYear} </h3>
                <div className='flex justify-start ml-1 mt-2 items-center gap-x-4  relative'>
                    <PiBookOpenTextLight className="text-white size-11" />
                    
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {book.title} </h2>
                    
                </div>
                <div className='flex justify-start items-center gap-x-2 ml-1 mt-2'>
                    <BiUserCircle className=" dark:text-white text-white size-4" />
                    <p className="my-1 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                </div>
                <p className='mt-4 text-white'> ShortQuote </p>
                <p className='mt-2 text-white'>
                   {book.shortDescription}
                </p>
            </div>
        </div>
    )
}

export default BookModal