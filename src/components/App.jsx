import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element="Movies" /> */}
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
