import propTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onClick }) => {
    return (
        <div

            onClick={() => {
                onClick(movie);
            }}
        >
            {movie.Title}
        </div>
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
