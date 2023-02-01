import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firstCource from "../images/firstCource.jpeg"
import secondCource from "../images/secondCource.webp"
import thirdCource from "../images/thirdCource.jpg"
import "../recommendcource/RecomCources.css"
const RecomCources = () => {
  return (
    <div>
     <div className="cources">
      <div className="cources-content">
        <div className="cources-text">
        <h1 id="cources-heading">Recommended Courses</h1>
        </div>
      </div>
     </div>
      <Container className="d-flex justify-content-center" id="card-container">
      <Row>
      <Col>
            <Card className="card" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <Card.Img variant="top" className='img-height' src={firstCource} />
              <Card.Body>
                <Card.Title className="cource-title" style={{fontSize:"17px"}}>How to Learn Madani Qaida</Card.Title>
                {/* <p style={{fontSize:"12px"}}>Period According to Students Ability</p> */}
                <p className="cource-des">In Madani Qaida Course you will learn how to teach Madani...</p>
               <Button variant="primary"><a href="/qaida" style={{color:"#fff",textDecoration:"none"}}>Start Learning</a></Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <Card.Img variant="top" className='img-height' src={secondCource} />
              <Card.Body>
                <Card.Title className="cource-title" style={{fontSize:"17px"}}>How to Learn khatme nabuwat</Card.Title> 
                <p className="cource-des">The importance of belief in Khatam-e-Nabuwat for...</p>
                <Button variant="primary"><a href="/khatmenabuwat" style={{color:"#fff",textDecoration:"none"}}>Start Learning</a></Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <Card.Img variant="top" className='img-height' src={thirdCource} />
              <Card.Body>
                <Card.Title className="cource-title" style={{fontSize:"17px"}}>How to Learn Quran Nazra</Card.Title>
                <p className="cource-des">Learn Quran Online with Quran Nazra (Quran reading) and...</p>
                <Button variant="primary"><a href="/qurannazra" style={{color:"#fff",textDecoration:"none"}}>Start Learning</a></Button>
              </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
    </div>
  );
};

export default RecomCources;
