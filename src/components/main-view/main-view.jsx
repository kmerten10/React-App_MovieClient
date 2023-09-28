import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movie, setMovie] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
        fetch("https://my-flix-app-66e818e7b7de.herokuapp.com/")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.docs.map((doc) => {
                    return {
                        id: doc.key,
                        title: doc.title,
                        image: doc.image,
                        director: doc.director_name?.[0]
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


