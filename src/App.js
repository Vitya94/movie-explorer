import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularMovies from './containers/PopularMovies';
import MoviesDetails from './containers/MoviesDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
