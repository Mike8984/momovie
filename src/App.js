import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import MovieList from './components/MovieList'
import Search from './components/Search'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async searchValue => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6e4dd83c`

    const response = await axios.get(url)

    if (response.data.Search) {
      setMovies(response.data.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="flex justify-between">
          <Heading heading="Movies" />
          <Search value={searchValue} setValue={setSearchValue} />
        </div>

        <div className='mt-10 flex-wrap'>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  )
}

export default App
