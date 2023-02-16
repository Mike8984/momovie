import React from 'react'

const MovieItem = ({movie}) => {
  return (
    <div>
      <img src={movie.Poster} alt="movie" className="h-40 w-48" />
      <h2>{movie.Title}</h2>
    </div>
  )
}

export default MovieItem