import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FormInput = ({onAdd}) => {
  const [title,setTitle]=useState("");
  const [task,setTask]=useState("");
  const addItem =()=>{
      onAdd();
  }
  return (
    <Row className="form">
      <Col sm="4">
        <Form.Control onChange={(e)=>setTitle*=} type="email" placeholder="Title" />
      </Col>
      <Col sm="4">
        <Form.Control type="email" placeholder="Task" />
      </Col>
      <Col sm="4">
        <Button type="submit" onClick={addItem}> Add</Button>
      </Col>
        
    </Row>
  );
};

export default FormInput;
