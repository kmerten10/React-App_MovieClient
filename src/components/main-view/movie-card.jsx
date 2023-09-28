import propTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onClick }) => {
    return (
        <Card>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director[0].Name}</Card.Text>
                <Button onClick={() => onClick(movie)} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};

//defines the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string.isRequired,
        Director: propTypes.string.isRequired,
        Image: propTypes.string.isRequired
    }).isRequired,
    onClick: propTypes.func.isRequired
};
