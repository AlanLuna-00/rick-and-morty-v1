import React, { useState } from 'react';
import './SearchBar.css'
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar(props) {
   
   const [Id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
   }

   const handleSearch = () => {
      props.onSearch(Id);
      setId('');
   }

   const verifyDataOnKeyDown = (e) => {
      const value = e.target.value;
      const isString = isNaN(value);

      if (e.key === 'Enter') {
         if (isString) {
            toast.error('El dato es invalido o ya fue agregado');
            setId('');
         } else {
            handleSearch();
         }
      }
   }

   let randomNum = Math.floor(Math.random() * 826) + 1;

   return (
      <div className='searchBar bar-container'>
         <button onClick={() => props.onSearch(randomNum)} className="search-button-2">Random</button>
         <input className='searchID' type='text' onKeyDown={verifyDataOnKeyDown} value={Id} placeholder='Search by ID' onChange={handleChange} />
         <Toaster position='top-left' />
      </div>
   );
}
