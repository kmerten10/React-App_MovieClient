import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    const [movie, setMovie] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token)
            return;

        fetch("https://my-flix-app-66e818e7b7de.herokuapp.com/movies", {
            headers: {
                Authorization: 'Bearer ${token}',
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {

                const moviesFromApi = data.map((movies) => {
                    return {
                        _id: movies._id,
                        Title: movies.Title,
                        Director: { Name: movies.Director[0].Name },
                        Genre: { Name: movies.Genre[0].Name },
                        Description: movies.Description,
                        Image: movies.Image
                    };
                });
                setMovie(moviesFromApi);
            });
    }, [token]);

    if (!user) {
        return (
            <>
                <LoginView
                    onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }}
                />
                or
                <SignupView />
            </>
        );
    }

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
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>

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


