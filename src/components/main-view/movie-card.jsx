import PropTypes from "prop-types";

export const MovieCard = ({ movie, onClick }) => {
    return (
        <div

            onClick={() => {
                onClick(movie);
            }}
        >
            {movie.title}
        </div>
    );
};

//defines the props constraints for the MovieCard
MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired
};
