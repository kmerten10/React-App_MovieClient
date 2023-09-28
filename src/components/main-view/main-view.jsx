import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movie, setMovie] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
        fetch("https://my-flix-app-66e818e7b7de.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((movies) => {
                    return {
                        _id: movies._id,
                        Title: movies.Title,
                        Director: { Name: movies.Director[0].Name },
                        Genre: { Name: movies.Genre[0].Name },
                        Description: movies.Description
                    };
                });
                setMovie(moviesFromApi);
            });
    }, []);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movie.length === 0) {
        return <div> The list is empty! </div>;
    }

    return (
        <div>

            {movie.map((movie) => (
                <MovieCard key={movie.id}
                    movie={movie}
                    onClick={() => {
                        setSelectedMovie(movie);
                    }}
                />
            ))}
        </div>
    );
};


