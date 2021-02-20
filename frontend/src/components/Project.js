import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Table, Badge } from 'react-bootstrap';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/projects/list/`,
        );
        setProjects(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const getProjects = () => {
    let list = [];

    projects.map((project) => {
      return list.push(
        <tr>
          <td>{project.title}</td>
          <td>
            <div>
              <p>{project.content}</p>
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
        </tr>,
      );
    });
    return list;
  };
  return (
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
              <tbody>{getProjects()}</tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Project;
