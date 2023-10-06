import propTypes from "prop-types";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



export const MovieCard = ({ movie, token, user, setUser }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // MovieCard.propTypes = {
    //     movie: propTypes.shape({
    //         Title: propTypes.string.isRequired,
    //         Director: propTypes.shape({ Name: propTypes.string.isRequired }),
    //         Image: propTypes.string.isRequired,
    //     }).isRequired
    // }

    // MovieCard.propTypes = {
    //     user: propTypes.shape({
    //         username: propTypes.string.isRequired,
    //         password: propTypes.string.isRequired,
    //         favoriteMovies: propTypes.array.isRequired,
    //     }).isRequired
    // }

    useEffect(() => {
        console.log(user);
        if (user.favoriteMovies && user.favoriteMovies.includes(movie._id)) {
            setIsFavorite(true);
        }
    }, [user]);

    const addFavoriteMovie = () => {
        console.log("Called addfavmovies");
        fetch(`https://my-flix-app-66e818e7b7de.herokuapp.com/users/${user.username}/movies/${movie._id}`,
            { method: "POST", headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("failed to add to favs");
                }
            })
            .then((responseUser) => {
                if (responseUser) {
                    localStorage.setItem("user", JSON.stringify(responseUser));
                    setUser(responseUser);
                    setIsFavorite(true);
                    console.log("successfully added to favs");
                    console.log(responseUser.favoriteMovie);
                }
            })
            .catch((err) => {
                console.log(`error on favmovies: ${err}`);
            });
    };

    const removeFavoriteMovie = () => {
        console.log("called removefavmovies");

        fetch(
            `https://my-flix-app-66e818e7b7de.herokuapp.com/users/${user.username}/movies/${movie._id}`,
            { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
        )
            .then((response) => {
                if (response.ok) {
                    console.log("response ok");
                    console.log(response);

                    return response.json();
                } else {
                    console.log("failed to remove fav movie");
                    return undefined;
                }
            })
            .then((user) => {
                console.log("user", user);
                console.log("isFavorite", isFavorite);

                if (user) {
                    console.log("user = true");

                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                    setIsFavorite(false);
                    console.log("isFavorite set to false:", isFavorite);
                }
            })
            .catch((err) => {
                console.log(`error on favmovies: ${err}`);
            });
    };

    return (
        <Col
            key={movie._id}
        >
            <Container>
                <Card.Body>
                    <Link to={`/movies/${encodeURIComponent(movie._id)
                        }`}>

                        <Card.Img variant="top" src={movie.Image} />
                        <span className="text">
                            <Card.Title className="text">{movie.Title}</Card.Title></span>
                        {/* <Card.Text className="text">{movie.Director.Name}</Card.Text> */}
                    </Link>
                    <Col>
                        {isFavorite ? (
                            <Button
                                variant="link"
                                onClick={removeFavoriteMovie}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="red"
                                    class="bi bi-heart-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    />
                                </svg>
                            </Button>
                        ) : (
                            <Button
                                variant="link"
                                onClick={addFavoriteMovie}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="red"
                                    class="bi bi-heart-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    />
                                </svg>
                            </Button>
                        )}
                    </Col >
                </Card.Body >
            </Container>
        </Col>
    );
};
