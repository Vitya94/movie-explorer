import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularMovies from './pages/PopularMovies';
import MoviesDetails from './pages/MoviesDetails';
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
