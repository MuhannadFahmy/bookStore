import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'


const BooksCard = ({books}) => {
    return (
      <div className='grid sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4'>
        {books.map((book) => (
            <div className='p-4' key={book._id}>
                <a href={`/books/details/${book._id}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className='flex justify-start items-center gap-x-4 relative'>
                        <PiBookOpenTextLight className= "text-white size-11"/>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pr-16"> {book.title} </h2>
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
                </a>
            </div>
        ))}
      </div>
    )
  }

export default BooksCard
