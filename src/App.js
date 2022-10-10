import React from 'react';
import './App.css';
import Home from './components/pages/Home/home';
import SearchResults from './components/pages/searchResults/searchResults'
import Detail from './components/pages/Detail/detail'
import { Link, Route } from 'wouter';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'stw',
        subscribeteAlCanal: true
      }
    }>
      <div className="App">
        <section className='App-content'>
          <Link to='/'>
            <h1>Home</h1>
          </Link>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/gif/:id' component={Detail} />
          </GifsContextProvider>
        </section>
      </div >
    </StaticContext.Provider>
  )
}