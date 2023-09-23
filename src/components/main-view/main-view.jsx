import { useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movie, setMovie] = useState([
        {
            id: 1,
            title: "Mrs. Doubtfire",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
            director: "Someone"
        },
        {
            id: 2,
            title: "The Matrix",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
            director: "Someone Else"
        },
        {
            id: 3,
            title: "Peter Rabbit",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
            director: "Peter Rabbit Director"
        },
        {
            id: 4,
            title: "This is a Movie",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
            director: "This is a movie director"
        },
        {
            id: 5,
            title: "New Movie!",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
            director: "New Director!"
        }
    ]);

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


