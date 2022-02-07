import React, { Component } from 'react'
import { Navbar, Container, Image } from 'react-bootstrap';
import Logo from './logo.svg';

class Navigationbar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image 
              src={Logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Navigationbar;
