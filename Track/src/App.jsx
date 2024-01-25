import React,{useState} from "react";
import { Container , Col, Row, Button} from 'react-bootstrap';
import FormInput from "../src/components/FormInput"
import Posts from "./components/Posts";
import { tasks } from "./data";

const App = () => {
  const [data , setData]= useState(tasks);

  const onAdd=(task)=>{
    setData([...data, task])
  }
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col sm="4">
            <h3 > Input task</h3>
          </Col>
          <Col sm="8">
            <FormInput onAdd={onAdd}/>
            <Posts data={data}/>
            {
              data.length >=1?(
                <Button>Erase all</Button>
              ): null
            }
          </Col>
            
            
        </Row>
      </Container>
    </div>
  );
};

export default App;
