import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css'
const NavBar = () => {
    return (
      <>
      <div className='topPage'>
      <h4 >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h4>
      </div>
        <Navbar bg="light" expand="lg">
        
            <Container>
                <Navbar.Brand href="/">Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link></Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link></Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link></Nav.Link>
                        <Nav.Link as={Link} to="/SignUp">Sign Up</Nav.Link>
                        <Nav.Link as={Link} to="#"><input className='inputBox' type="text" placeholder='Search....' />
                        </Nav.Link>
                        <Nav.Link></Nav.Link>

                        <Nav.Link as={Link} to="/WishList"><i class="fas fa-heart"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/card"><i className="fa-solid fa-bag-shopping"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Signup"><i class="fas fa-user-circle"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default NavBar;
