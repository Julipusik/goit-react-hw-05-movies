import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "api";
import { CastContainer, CastList, CastItem } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getCast() {
            try {
                const data = await getCastById(movieId);
                setCast(data.cast);
            } catch (error) {
                setError(true);
            }
        }
        getCast();
    }, [movieId]);

    return (
        <CastContainer>
            <h3>Cast</h3>
            {cast.length > 0 && (
        <CastList>
            {cast.map(({ name, profile_path, id }) => (
                <CastItem key={id}>
                    <h3>{name}</h3>
                    <img src={profile_path !== null
                        ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                        : "https://info.renome.ua/wp-content/uploads/2021/09/placeholder.png"}
                        alt={name} width="150" height="225"
                    />
                </CastItem>
            ))}
                </CastList>
            )}
      {error && <p>{error}</p>}
        </CastContainer>
    )
}

export default Cast;