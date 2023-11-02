import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsToMovieById } from 'services/movies-api';
import { StyledReviewsUl } from './StyledReviews';
import styled from 'styled-components';

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
          <StyledReviewsUl>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author ? review.author : 'Anonymous'}</h3>
                <p>
                  Rate:{' '}
                  {review?.author_details?.rating
                    ? `${review.author_details.rating}/10`
                    : 'No rate yet'}
                </p>
                <p>
                  {review.content && review.content !== '.'
                    ? review.content
                    : 'There are no comments by this author yet'}
                </p>
              </li>
            ))}
          </StyledReviewsUl>
        </>
      ) : (
        <StyledPlugH2>There are no reviews, sorry!</StyledPlugH2>
      )}
    </div>
  );
};

const StyledPlugH2 = styled.h2`
  padding-bottom: 50px;
`;
