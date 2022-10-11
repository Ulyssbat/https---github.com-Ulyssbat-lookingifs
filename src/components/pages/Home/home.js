import React, { useState } from 'react';
import { useLocation } from 'wouter';
import ListOfGifs from '../../listOfGifs/list-of-gifs';
import { useGifs } from '../../../hooks/useGifs';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [location, setLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value.length !== 0) {
      setDisabledButton(false)
    }
    else { setDisabledButton(true) }
  };

  return (
    <>
      <h1>Busca tus gifs preferidos!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Buscador'
          onChange={handleChange}>
        </input>
        <button disabled={disabledButton}>Buscar</button>
      </form>
      <h3>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <div>
        <h3>Categorias populares</h3>
      </div>
    </>
  )
}