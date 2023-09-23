export const MovieCard = ({ movie }) => {
    return (
        <div

            onClick={() => {
                onMovieClick(movie);
            }}
        >
            {movie.Title}
        </div>
    );
};

