import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Education = () => (
  <section>
    <Container className="mt-5 pt-5">
      <h1 className="mb-4">Education</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="#" />
              <Card.Text>하하하하하하하</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>하하하하하하하</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>하하하하하하하</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Education;
