import React, { useState, useEffect }  from 'react';
import axios from 'axios'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        setMovies(res.data)
      }) 
  }, [])

  return (
    <div className="App">
      {
        movies && <MovieList movies={movies} />
      }
    </div>
  );
}

export default App;
