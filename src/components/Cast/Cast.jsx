import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastToMovieById } from 'services/movies-api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCastToMovieById(movieId);
        // console.log(data);
        setCast(data);
      } catch (error) {}
    };
    getCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <div>No cast information available</div>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
