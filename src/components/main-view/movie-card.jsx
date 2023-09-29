import propTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onClick }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.Image} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
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
