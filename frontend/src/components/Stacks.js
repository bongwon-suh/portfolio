import React from 'react';
import { Container, Table, Card } from 'react-bootstrap';

const Stacks = () => (
  <section>
    <Container className="mt-5 pt-5">
      <h1 className="mb-4">Stacks</h1>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>기술 구분</th>
                <th>로고</th>
                <th>활용 수준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript</td>
                <td>JavaScript</td>
                <td>
                  JAVASCRIPT, ECMASCRIPT, WEBPACK 과 BABEL등을 위주로 개발하며
                  모듈화를 통한 플러그인 개발 및 SDK도 가능합니다. 브라우저
                  환경의 JAVASCRIPT의 경우 브라우저 호환성을 중요시하여 IE
                  환경에서도 정상 작동하도록 개발하고 있으며 최신 문법인 ES6
                  또한 자유자재로 사용하고 있습니다
                </td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>JavaScript</td>
                <td>
                  JAVASCRIPT, ECMASCRIPT, WEBPACK 과 BABEL등을 위주로 개발하며
                  모듈화를 통한 플러그인 개발 및 SDK도 가능합니다. 브라우저
                  환경의 JAVASCRIPT의 경우 브라우저 호환성을 중요시하여 IE
                  환경에서도 정상 작동하도록 개발하고 있으며 최신 문법인 ES6
                  또한 자유자재로 사용하고 있습니다
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  </section>
);

export default Stacks;
