import React, { useState } from 'react'
import axios from 'axios'

function MovieForm({ addMovie }) {
  const initialMovie = {
    name: '', poster: '', comment: ''
  }
  const [data, setData] = useState(initialMovie)

  const handleChange = e => {
    const { name, value } = e.target
    setData(data => ({ ...data, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/api/movies', data)
      .then(res => res.data)
      .then(data => addMovie(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Movie title</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="poster">Poster URL</label>
        <input
          type="text"
          name="poster"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          name="comment"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Add movie</button>
    </form>
  )
}

export default MovieForm

