import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewById } from '../service/service';
import { toast } from 'react-hot-toast';

import {
  ReviewsContainer,
  ReviewsTitle,
  ReviewsList,
  ReviewsItem,
  ReviewsItemTitle,
  ReviewsItemText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsData = await fetchReviewById(movieId);
        const reviews = reviewsData.results;
        if (reviews) {
          setReviews(reviews);
        } else {
          setError(error);
        }
      } catch (error) {
        toast.error('Something went wrong. Please, try again later!');
        setError(error);
      }
    };
    getReviews();
  }, [movieId, error]);

  return (
    <ReviewsContainer>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <ReviewsList>
        {reviews.map(review => (
          <ReviewsItem key={review.id}>
            <ReviewsItemTitle>
              {review.author ? review.author : 'unknown'}
            </ReviewsItemTitle>
            <ReviewsItemText>
              {review.content ? review.content : 'unavailable'}
            </ReviewsItemText>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </ReviewsContainer>
  );
};

export default Reviews;
