import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/list-of-gifs';
import { Link, Route } from 'wouter';

export default function App() {
  const [category, setCategory] = useState();
  const [disabledButton, setDisabledButton] = useState(true);
  let url = `/gif/${category}`

  return (
    <div className="App">
      <section className='App-content'>
        <h1>Busca tus gifs preferidos!</h1>
        <input
          placeholder='Buscador'
          onChange={e => {
            setCategory(e.target.value);
            {
              if (e.target.value.length != 0) {
                setDisabledButton(false)
              }
              else { setDisabledButton(true) }
            }
          }}>
        </input>
        <Link to={url}>
          <button disabled={disabledButton}>Buscar</button>
        </Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div >
  )
}