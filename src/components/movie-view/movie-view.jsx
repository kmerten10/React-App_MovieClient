import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    const { movieId } = useParams();

    const movies = movies.find((b) => b.id === movieId);

    return (
        <div>

            <Link to={`/movies`}>
                <button onClick={onBackClick}
                    className="back-button"
                    style={{ cursor: "pointer" }}
                >Back</button>
            </Link>

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
        </div>
    );
};