import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PopularMovies from './containers/PopularMovies';
import MoviesDetails from './containers/MoviesDetails';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
