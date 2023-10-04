import { useParams } from "react-router";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import './movie-view.scss';


export const MovieView = ({ movie }) => {
    const { movieid } = useParams();


    const movies = movie.find((m) => m._id === movieid);

    return (
        <div>

            <div className='text'>
                <div>
                    <span>{movies.Title}</span>
                </div>

                <div>
                    <img src={movies.Image} />
                </div>

                <div>

                    <span>{movies.Genre.Name}</span>
                </div>
                <div>
                    <span>{movies.Description}</span>
                </div>
                <div>
                    <span>Director: </span>
                    <span>{movies.Director.Name}</span>
                </div>
                <Link to={`/movies`}>
                    <button
                        className="button"
                        style={{ cursor: "pointer" }}
                    >Back</button>
                </Link>

            </div>
        </div>
    );
};
