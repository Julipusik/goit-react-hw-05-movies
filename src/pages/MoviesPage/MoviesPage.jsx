import { getMovies } from "api";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movies from "components/Movies/Movies";
import { SearchMovie } from "./MoviePage.styled";

export default function MoviesPage() {
    const [params, setParams] = useSearchParams();
    const [findMovies, setFindMovies] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        async function findMovie() {
            try {
                setFindMovies([]);
                const movieInfo = await getMovies('/search/movie', params.get('query'));
                params.get('query') && setFindMovies(movieInfo.results);
            }
            catch (error) {
                console.log(error);
            }
        }
    
        findMovie();
    }, [params]);

    const onInput = evt => {
        setInput(evt.target.value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        setInput(input);
        params.set('query', input);
        setParams(params);
    }
    
    return (
        <div>
            <SearchMovie onSubmit={onSubmit}>
                <input type="text" value={input} onChange={onInput}></input>
                <button type="submit">Search</button>
            </SearchMovie>
            {findMovies.length !== [] && <Movies movies={findMovies}/>}
        </div>
    )
}