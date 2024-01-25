import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const Posts = ({ data }) => {
  return (
    <Row className="my-3">
      <Col sm="10">
        <Accordion >
          {data.length >= 1 ? (
            data.map((item,index) => {
              return (
                <Accordion.Item key={index} eventKey={item.id}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    <h6>{item.task} </h6>
                
                    <Button> erase </Button>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })
          ) : (
            <h2> no tasks</h2>
          )}
        </Accordion>
      </Col>
    </Row>
  );
};
export default Posts;
