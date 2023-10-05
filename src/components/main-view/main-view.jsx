
import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../Nav-bar/nav.bar";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        if (!token)
            return;

        fetch("https://my-flix-app-66e818e7b7de.herokuapp.com/movies", {
            headers: {
                Authorization: `Bearer ${token}`,
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
    return (
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
            <Row className="container">
                <Row className="justify-content-md-center">
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <>
                                    {user ? (
                                        <Navigate to="/movies" />
                                    ) : (
                                        <Col md={5}>
                                            <LoginView
                                                onLoggedIn={(user, token) => {
                                                    setUser(user);
                                                    setToken(token);
                                                }}
                                            />
                                        </Col>
                                    )}
                                </>
                            }
                        />

                        <Route
                            path="/signup"
                            element={
                                <>
                                    {user ? (
                                        <Navigate to="/movies" />
                                    ) : (
                                        <Col md={5}>
                                            <SignupView />
                                        </Col>
                                    )}
                                </>
                            }
                        />

                        <Route
                            path="/movies"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : movie.length === 0 ? (
                                        <div> The list is empty! </div>
                                    ) : (
                                        <>

                                            <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
                                            {movie.map((movie) => {
                                                return (
                                                    <Col md={2} key={movie}>
                                                        <MovieCard
                                                            movie={movie}
                                                            user={user}
                                                            setUser={setUser}
                                                            token={token}

                                                        />
                                                    </Col>
                                                )
                                            })}
                                        </>
                                    )}
                                </>
                            }
                        />

                        <Route
                            path="/movies/:movieid"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : movie.length === 0 ? (
                                        <div> The list is empty! </div>
                                    ) : (
                                        <>
                                            <Col md={8}>
                                                <MovieView
                                                    movie={movie}
                                                    user={user}
                                                    setUser={setUser}
                                                    token={token} />
                                            </Col>

                                        </>
                                    )}
                                </>
                            }
                        />

                        <Route
                            path="/profile"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : (
                                        <>
                                            <Col md={8}>
                                                <ProfileView
                                                    movie={movie}
                                                    user={user}
                                                    setUser={setUser}
                                                    token={token}

                                                />
                                            </Col>

                                        </>
                                    )}
                                </>
                            }
                        />


                    </Routes>
                </Row >
            </Row>
        </BrowserRouter>
    );
};



