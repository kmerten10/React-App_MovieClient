import React from "react";
import { useState } from "react";
import { Form, Button, Card, CardGroup, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieCard from "../main-view/movie-card";

export const ProfileView = ({ user, token, movie, setUser }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birth_date, setBirthday] = useState('');

    let result = movie.filter((m) => user.favoriteMovies.includes(m._id));

    const handleUpdate = (event) => {
        event.preventDefault();

        let data = {
            username: username,
            password: password,
            email: email,
            birth_date: birth_date,
        };


        fetch(
            `https://my-flix-app-66e818e7b7de.herokuapp.com/users/{$user.username}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            }
        )
            .then(async (response) => {
                console.log("response:", response);
                if (response.ok) {
                    addListener("update successful");
                    const data = await response.json();
                    localStorage.setItem("user", JSON.stringify(data));
                    window.location.reload();
                } else {
                    const errorText = await response.text();
                    console.log("Error response body:", errorText);
                    alert("update failed");
                }
            })
            .catch((err) => console.log("error", err));
    };

    //DELETE Account
    const deleteAccount = () => {

        let data = {
            username: username,
            password: password,
            email: email,
            birth_date: birth_date,
        };

        fetch(
            `https://my-flix-app-66e818e7b7de.herokuapp.com/users/{$user.username}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            }
        )
            .then((response) => {
                if (response.ok) {
                    setUser(null);
                    localStorage.clear();
                    alert("Account Deleted")
                    window.location.replace("/login");
                } else {
                    alert("Could not delete account")
                }
            });
    };


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>My Profile</Card.Title>
                                    <Card.Text>Want to make changes to your profile?</Card.Text>
                                    <Form onSubmit={handleUpdate}>

                                        <Form.Group>
                                            <Form.Label>
                                                Username:
                                                <Form.Control
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => {
                                                        setUsername(e.target.value);
                                                    }}
                                                    placeholder={user.username}
                                                />
                                            </Form.Label>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>
                                                Password:
                                                <Form.Control
                                                    type="text"
                                                    value={password}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }}
                                                    placeholder="*******"
                                                />
                                            </Form.Label>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>
                                                Email:
                                                <Form.Control
                                                    type="text"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }}
                                                    placeholder={user.email}
                                                />
                                            </Form.Label>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>
                                                Birthday:
                                                <Form.Control
                                                    type="text"
                                                    value={birth_date}
                                                    onChange={(e) => {
                                                        setBirthday(e.target.value);
                                                    }}
                                                    placeholder={user.birth_date}
                                                />
                                            </Form.Label>
                                        </Form.Group>

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={handleUpdate}
                                        >Update Account
                                        </Button>
                                    </Form>

                                    <Link to="/login">
                                        <Button
                                            variant="danger"
                                            type="text"
                                            onClick={deleteAccount}
                                        >Delete Account </Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {result.map((movie) => {
                        return (
                            <Col key={movie._id}
                            >
                                <MovieCard
                                    movie={movie}
                                    token={token}
                                    setUser={setUser}
                                    user={user}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}


