import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';
import {
  ReviewsContainer,
  ReviewsTitle,
  ReviewsList,
  ReviewsItem,
  ReviewsItemTitle,
  ReviewsItemText,
  NoReviewsMessage,
} from './Reviews.styled';
import { fetchReviewById } from '../service/service';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    getReviews();
  }, [movieId, error]);

  if (reviews.length === 0) {
    return (
      <div>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <NoReviewsMessage>No reviews have been added yet!</NoReviewsMessage>
      </div>
    );
  }

  return (
    <ReviewsContainer>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
