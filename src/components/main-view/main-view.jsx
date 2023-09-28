import { useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movie, setMovie] = useState([]);


    const [selectedMovie, setSelectedMovie] = useState(null);

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


