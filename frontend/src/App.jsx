import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/home/index'
import CreateBook from './page/createBook/index'
import DeleteBook from './page/deleteBook/index'
import EditBook from './page/editBook/index'
import ShowBook from './page/showBook/index'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/books/create' element={ <CreateBook /> } />
      <Route path='/books/details/:id' element={ <ShowBook /> } />
      <Route path='/books/edit/:id' element={ <EditBook /> } />
      <Route path='/books/delete/:id' element={ <DeleteBook /> } />
    </Routes>
    
  )
}

export default App