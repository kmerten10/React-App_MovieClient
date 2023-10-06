import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainView } from "../main-view/main-view";
import './nav-bar.scss'

export const NavigationBar = ({ user, onLoggedOut, setSearch }) => {
    return (
        <Navbar className="nav-bar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/movies">
                    <span className="nav-text">Movies App</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!user ? (
                            <>
                                <Nav.Item>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/signup">Signup</Nav.Link>
                                </Nav.Item>
                            </>
                        ) : (
                            <>
                                <Nav.Item>
                                    <Nav.Link href="/movies">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/login" onClick={onLoggedOut}>Logout</Nav.Link>
                                </Nav.Item>
                                <Form className="d-flex navbar-style">
                                    <Form.Control
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                        }}
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                            </>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};