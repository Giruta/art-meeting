import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import work from "../assets/work.jpeg";
import {Link} from "react-router-dom";

const Courses = () => {
  return(
    <div id='courses'>
      <Header background={'green-bg'}/>
      <section className='courses section'>
        <Container>
          <Row>
            <Col sm={12} className='text-center'>
              <h2 className='courses-title blu-dot title'>Courses</h2>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col sm={10} className='position-relative'>
              <Link to={/example/} className='d-block'><Image className='courses-img image' src={work}/></Link>
              <h4 className='courses-title subtitle'>Курс(пример)</h4>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Courses;