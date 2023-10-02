import { getMovieById } from "api";
import React, { Suspense, useEffect, useState } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { Container, MovieInfoContainer, MovieInfo, AdditionalInfo, Link, CastReviewsContainer, GoBackBtn } from "./MovieDetailsPage.styled";

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);

    const { title, genres, vote_average, overview, poster_path } =
        movie;
    
    useEffect(() => {
        async function getMovieDetails() {
            try {
                const movieDetails = await getMovieById(movieId);
                setMovie(movieDetails);
            }
            catch (error) {
                setError(true);
            }
        }
        getMovieDetails();
    }, [movieId]);
    

    return (
        <Container>
            <GoBackBtn to={location.state}>Go back</GoBackBtn>
            {movie && (
            <>
        <MovieInfoContainer>
                    <img src={poster_path !== null
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : "https://info.renome.ua/wp-content/uploads/2021/09/placeholder.png"}
                        alt={title} width="300" height="450">
                    </img>
                    <MovieInfo>
                        <h2>{title}</h2>
                        <p><b>UserScore:</b> {vote_average}</p>
                        <p><b>Overview:</b> {overview}</p>
                        <p><b>Genres:</b> {genres
          ?.reduce((prev, element) => {
            return prev + ' ' + element.name;
          }, '')
                                .trim()}</p>
                    </MovieInfo>
                                </MovieInfoContainer>
                    <AdditionalInfo>
                        <h3>Additional information</h3>
                        <CastReviewsContainer>
                            <Link to={`/movies/${movieId}/cast`} state={location.state}>Cast</Link>
                            <Link to={`/movies/${movieId}/reviews`} state={location.state}>Reviews</Link>
                        </CastReviewsContainer>
                        {error && <p>{error}</p>}
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet/>
                            </Suspense>
                    </AdditionalInfo>
                    
</>
            )}

            </Container>
    )
}