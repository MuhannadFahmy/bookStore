import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BooksCard from '../../components/home/BooksCard'
import BooksTable from '../../components/home/BooksTable'
import ToggleView from '../../components/home/ToggleButton'



const home = () => {
    
    const [ loading, setLoading ] = useState(false);
    const [ books, setBooks ] = useState([]);
    // false = table, true = card
    const [ showType, setShowType ] = useState(true);

    useEffect( () => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then ((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    const toggleViewParent = ( toggleState ) => {
        setShowType(toggleState);
    }
    
    return (
    <div className='p-4'>
        
        <div className='flex justify-between items-center'>
            
            <h1 className='text-3xl my-8'> Books List </h1>
            <div className='flex justify-center items-center gap-x-4'>
                <ToggleView toggleView = {toggleViewParent} />
            </div>
            <Link to='/books/create'>
                <MdOutlineAddBox className='text-gray-700 text-4xl'/>
            </Link>
        </div>
        { loading? (
            <Spinner/>
        ) : (
            showType ? (<BooksTable books = {books}/>) : ( <BooksCard books = {books}/> )
        )}
    </div>
    )}

export default home