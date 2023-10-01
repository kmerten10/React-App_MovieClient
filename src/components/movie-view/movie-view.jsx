import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div className='text'>
                <div>
                    <span>{movie.Title}</span>
                </div>

                <div>
                    <img src={movie.Image} />
                </div>

                <div>

                    <span>{movie.Genre.Name}</span>
                </div>
                <div>
                    <span>{movie.Description}</span>
                </div>
                <div>
                    <span>Director: </span>
                    <span>{movie.Director.Name}</span>
                </div>

            </div>
            <button onClick={onBackClick}
                className="back-button"
                style={{ cursor: "pointer" }}
            >Back</button>
        </div>
    );
};