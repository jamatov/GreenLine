import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/greenlogo.svg'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar className='nav-bar' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img className='nav-logo' src={Logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='nav-list'>
            <li className="nav-links">
              <Link to='/about'>ABOUT US</Link>
            </li>
            <li className="nav-links">
              <Link>AUDIOLOGY/HEARING AIDS</Link>
            </li>
            <li className="nav-links">
              <Link>PROVIDERS</Link>
            </li>
            <li className="nav-links">
              <Link>SPECIALTIES</Link>
            </li>
            <li className="nav-links">
              <Link>LOCATIONS</Link>
            </li>
            <li className="nav-links">
              <Link>PAY MY BILL</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
