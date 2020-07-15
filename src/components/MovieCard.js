import React from 'react'
import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <h3>{movie.name}</h3>
      <img src={movie.poster} alt={movie.name} />
      <p>{movie.comment}</p>
    </div>
  )
}

export default MovieCard

