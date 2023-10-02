import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "api";
import { ReviewsContainer, ReviewsList, ReviewsItem } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {
                const data = await getReviewsById(movieId);
                setReviews(data.results);
            } catch (error) {
                setError(true);
            }
        }
    
        getReviews();
    }, [movieId]);

    return (
        <ReviewsContainer>
            <h3>Reviews</h3>
            {error ? (<p>There are no reviews</p>)
                : reviews.length > 0 ? (
                <ReviewsList>
                    {reviews.map(({ author, content, id }) => (
                        <ReviewsItem key={id}>
                            <b>{author}</b>
                            <p>{content}</p>
                        </ReviewsItem>
                    ))}
                </ReviewsList>)
            : <p>There are no reviews</p>}
        </ReviewsContainer>
    )
    
}

export default Reviews;