import React, { useState, useEffect }  from 'react';
import axios from 'axios'
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

    </div>
  );
}

export default App;
