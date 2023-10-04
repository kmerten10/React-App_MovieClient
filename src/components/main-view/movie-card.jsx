import React from "react";
import propTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie }) => {

    return (
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
            <Card>
                <Card.Img variant="top" src={movie.Image} />
                <Card.Body>
                    <span className="text">
                        <Card.Title className="text">{movie.Title}</Card.Title></span>
                    {/* <Card.Text className="text">{movie.Director.Name}</Card.Text> */}
                </Card.Body>
            </Card >
        </Link >

    );
};

//defines the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired,
        Director: propTypes.shape({ Name: propTypes.string.isRequired }),
        Image: propTypes.string.isRequired
    }).isRequired
};

