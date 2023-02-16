import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movies }) => {
  return (
    <div className="flex gap-8">
      {movies.map(movie => (
        <MovieItem movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
