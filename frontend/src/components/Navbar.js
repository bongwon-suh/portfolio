import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const navbar = () => (
  <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Bongwon Suh</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#summary">SUMMARY</Nav.Link>
        <Nav.Link href="#project">PROJECT</Nav.Link>
        <Nav.Link href="#awards">AWARDS</Nav.Link>
        <Nav.Link href="#stacks">STACKS</Nav.Link>
        <Nav.Link href="#education">EDUCATION</Nav.Link>
        <Nav.Link href="#contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
