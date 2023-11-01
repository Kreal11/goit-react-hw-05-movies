import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsToMovieById } from 'services/movies-api';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const dataReviews = await fetchReviewsToMovieById(movieId);
        console.log(dataReviews.results);
        setReviews(dataReviews.results);
      } catch (error) {}
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length ? (
        <>
          <h2>Rewiews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>Review: {review.rating}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>There are no reviews, sorry!</h2>
      )}
    </div>
  );
};
