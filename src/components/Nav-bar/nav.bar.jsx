import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './nav-bar.scss'

export const NavigationBar = ({ user, onLoggedOut }) => {
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
                            </>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};