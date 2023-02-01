import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../navbar/Navigation.css"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import Nlogo from "../images/n-logo.png"
const Navigation = () => {
  return (
    <div>
       <Navbar className='navigation-bar' fixed="top" expand="lg">
      <Container fluid>
        <div><Navbar.Brand href="/"><Link to="/"><img src={logo} className='logo' alt="" /></Link></Navbar.Brand></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='navbar-res-style'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/"><Link style={{textDecoration:"none"}} className='home-link'  to="/">Home</Link></Nav.Link>
            <Nav.Link href="/about"><Link style={{textDecoration:"none"}} className='links-item' to="/about">About</Link></Nav.Link>
            <Nav.Link href="/cources"><Link style={{textDecoration:"none"}} className='links-item' to="/cources">Courses</Link></Nav.Link>
            {/* <Nav.Link href="/gallery"><Link style={{textDecoration:"none"}} className='links-item' to="/gallery">Gallery</Link></Nav.Link> */}
            <NavDropdown title="Registration" id="navbarScrollingDropdown" className='links-item'>
              <NavDropdown.Item href="/admission"><Link style={{textDecoration:"none"}} className='links-item' to="/admission">Admission Form</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact"><Link style={{textDecoration:"none"}} className='links-item' to="/contact">Contact Us</Link></Nav.Link>
          </Nav>

      <Navbar.Brand href="https://www.facebook.com/profile.php?id=100089379312089&mibextid=ZbWKwL" ><a href="https://www.facebook.com/profile.php?id=100089379312089&mibextid=ZbWKwL" target="_blank" className='n-logo-cont'><img src={Nlogo} className='n-logo' alt="" /></a></Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
