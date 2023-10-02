import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { MovieList, MovieListItem } from './Movies.styled';

const Movies = ({ movies }) => {
    const location = useLocation();

    return (
        <MovieList>
            {movies.map((movie) => (
                <MovieListItem key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={location}>
                    {movie.title}
                    </Link>
                </MovieListItem>
        ))}
        </MovieList>
    )
}

export default Movies;