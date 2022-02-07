import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigationbar from '../NavigationBar/NavigationBar.js';

class App extends Component {

  render() {
    return (
      <div>
        <Navigationbar/>
        <Container className="col-lg-12 ml-auto mr-auto" id="mainContainer">
          <Row className="mt-5 center">
            <Col>
              <Card className="p-5 text-center">
                Hello World!
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
