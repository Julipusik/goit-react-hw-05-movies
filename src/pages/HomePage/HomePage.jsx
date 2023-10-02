import { getMovies } from "api";
import React, { useState, useEffect } from "react";
import Movies from "components/Movies/Movies";
import { HomeStyled } from "./HomePage.styled";

export default function HomePage() {
    const [trends, setTrends] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getTrends() {
            try {
                const trendsData = await getMovies('/trending/movie/day');
                setTrends(trendsData.results);
            } catch (error) {
                setError(true);
            }
        }
        getTrends();
    }, []);
    
    return (
        <HomeStyled>
            <h2>Trending today</h2>
            <Movies movies={trends} />
            {error && <p>{error}</p>}
        </HomeStyled>
    )
}