import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Quiz</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Quiz</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>User</NavLink>
                        <NavLink to="/admins" className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>Log In</button>
                        <button className='btn-signup'> Sign Up</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;