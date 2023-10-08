import { useParams } from "react-router";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import './movie-view.scss';
import { Container, Card, Col } from "react-bootstrap";


export const MovieView = ({ movie }) => {
    const { movieid } = useParams();


    const movies = movie.find((m) => m._id === movieid);

    return (
        <Container className="movieview-text">
            <Col key={movie} ClassName="text" >
                <Card.Text>
                    <span>{movies.Title}</span>
                </Card.Text>
            </Col>
            <Card.Img src={movies.Image} />

            <Col>
                <Card.Text>

                    <span>{movies.Genre.Name}</span>
                </Card.Text >
                <Card.Text>
                    <span>{movies.Description}</span>
                </Card.Text >
                <Card.Text>
                    <span>Director: </span>
                    <span>{movies.Director.Name}</span>
                </Card.Text >
                <Link to={`/movies`}>
                    <button
                        className="button"
                        style={{ cursor: "pointer" }}
                    >Back</button>
                </Link>
            </Col>

        </Container >
    );
};
