import React from 'react';
import { Container, Card, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const home = () => (
  <main>
    <section>
      <Container className="mt-5 pt-5">
        <h1 className="mb-4">SUMMARY</h1>
        <p>
          안녕하세요. 서봉원입니다.
          <br />
          개발자가 되고 싶은 서봉원입니다. 안녕하세요. 서봉원입니다.
          <br />
          안녕하세요. 서봉asdsadasdsadasdasdasdasdasdasd원입니다.
          <br />
        </p>
      </Container>
    </section>
    <section>
      <Container className="mt-5 pt-5">
        <h1 className="mb-4">PROJECT</h1>
        <Card>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>프로젝트</th>
                  <th>소개</th>
                  <th>개발 참여도</th>
                  <th>추가정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>틈새시장</td>
                  <td>
                    <div>
                      <p>ㅁㄴㅇㅎㅁㄴㅇㅁㄶ</p>
                      <Badge variant="primary">Primary</Badge>{' '}
                      <Badge variant="secondary">Secondary</Badge>{' '}
                      <Badge variant="success">Success</Badge>{' '}
                      <Badge variant="danger">Danger</Badge>{' '}
                      <Badge variant="warning">Warning</Badge>{' '}
                      <Badge variant="info">Info</Badge>{' '}
                      <Badge variant="light">Light</Badge>{' '}
                      <Badge variant="dark">Dark</Badge>
                    </div>
                  </td>
                  <td>많이 참여함</td>
                  <td>추가정보임ㅋ</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </section>
  </main>
);

export default home;
