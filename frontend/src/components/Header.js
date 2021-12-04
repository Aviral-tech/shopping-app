import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      <Navbar className="navbar-dark bg-dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>TechShoppe</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i class="fas fa-sign-in-alt"></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
