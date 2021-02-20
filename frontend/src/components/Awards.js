import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Table } from 'react-bootstrap';

const Awards = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/awards/list/`,
              );
              setAwards(res.data);
              console.log(res.data);
            } catch {}
        };
        fetchData();
    }, []);

    const getAwards = () => {
        let list = [];

        awards.map((award) => {
            return list.push(
                <tr>
                <td>{award.contest}</td>
                <td>{award.team}</td>
                <td>많이 참여함</td>
                <td>추가정보임ㅋ</td>
              </tr>
            );
        });
        return list;
    };
    return (
        <section>
        <Container className="mt-5 pt-5">
          <h1 className="mb-4">Awards</h1>
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
                <tbody>{getAwards()}</tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </section>
    );

};

export default Awards

