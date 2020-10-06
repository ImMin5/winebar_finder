import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HomeIcon from './Icon/HomeIcon';

const Tabbar = (props) => {
  

const container ={
  position:"sticky",
  bottom :"0",
  height:"100%",

}
const row ={
  borderTop:"solid 1px black",
  height:"100%",
  
}
const col = {
  textAlign:"center",
  
}
  

  return (
   <Container style={container}>
    <Row style={row}>
    <Col xs="4" style={col}>Home</Col>
      <Col xs="4" style={col}>Map</Col>
      <Col xs="4" style={col}><HomeIcon/>Mypage</Col>
    </Row>
   </Container>
  );
}

export default Tabbar;
