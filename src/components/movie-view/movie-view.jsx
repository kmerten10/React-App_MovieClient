export const MovieView = ({ movies, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movies.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movies.Title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movies.Director}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};