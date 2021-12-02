import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      <Navbar className="navbar-dark bg-dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">TechShoppe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i class="fas fa-sign-in-alt"></i> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
