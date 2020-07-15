import React, { useState, useEffect }  from 'react';
import axios from 'axios'
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

function App() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        setMovies(res.data)
      }) 
  }, [])

  const addMovie = movie => setMovies(movies => [...movies, movie])

  return (
    <div className="App">
      <MovieForm addMovie={addMovie} />
      {
        movies && <MovieList movies={movies} />
      }
    </div>
  );
}

export default App;
