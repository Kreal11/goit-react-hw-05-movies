import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsToMovieById } from 'services/movies-api';
import { StyledReviewsUl } from './StyledReviews';
import styled from 'styled-components';
import { Dna } from 'react-loader-spinner';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        const dataReviews = await fetchReviewsToMovieById(movieId);
        setReviews(dataReviews.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return isLoading ? (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  ) : (
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

export default Reviews;
