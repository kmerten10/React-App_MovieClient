import React from "react";
import propTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onClick }) => {
    return (
        <Card>
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                <Card.Button style={{ cursor: "pointer" }} className="h-100" onClick={() => onClick(movie)} variant="link"></Card.Button>
            </Link>
            <Card.Img variant="top" src={movie.Image} />
            <Card.Body>
                <Card.Title className="text">{movie.Title}</Card.Title>
                <Card.Text className="text">{movie.Director.Name}</Card.Text>
            </Card.Body>
        </Card >
    );
};

//defines the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired,
        Director: propTypes.shape({ Name: propTypes.string.isRequired }),
        Image: propTypes.string.isRequired
    }).isRequired,
    onClick: propTypes.func.isRequired
};
