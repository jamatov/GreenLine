import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function NavTest() {
  return (
      <Navbar className='Navbar d-flex justify-content-between ' bg="light" expand="lg">
        <Container>
          <div>
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="navitem">
                <Link to='/about'>ABOUT US</Link>
              </li>
              <li className="navitem">
                <Link to='/audiology'>AUDIOLOGY/HEARING AIDS</Link>
              </li>
              <li className="navitem">
                <Link to='/providers'>PROVIDERS</Link>
              </li>
              <li className="navitem">
                <Link to='/specialites'>SPECIALTIES</Link>
              </li>
              <li className="navitem">
                <Link to='/locations'>LOCATIONS</Link>
              </li>
              <li className="navitem">
                <Link to='/paymybill'>PAY MY BILL</Link>
              </li>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
