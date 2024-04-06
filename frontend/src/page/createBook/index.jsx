import React, { useState } from 'react'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'



const createBook = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      shortDescription,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully', { variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please check console');
        enqueueSnackbar('Error', { variant: 'error'});
        console.log(error)
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'> Create Book </h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-slate-700 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'> Title </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
          />
        </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'> Short Description </label>
            <input
              type='text'
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'> Author </label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'> Publish Year </label>
            <input
              type='number'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-xl'
            />
          </div>
          <button className='p-2 bg-slate-700 m-8 text-white rounded-xl' onClick={handleSaveBook}> Save </button>
        </div>
      </div>
      )
}

      export default createBook