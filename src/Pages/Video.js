import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import template from "../assets/template.png";
import {Link} from "react-router-dom";
// import useFetch from "../Helpers/useFetch";

const Video = () => {
  // const { data: projects, isPending, error } = useFetch('http://localhost:8080/projects');
  return(
    <div id='video'>
      <Header background={'green-bg'}/>
      <section className='video section'>
        <Container>
          <Row>
            <Col sm={12} className='text-center'>
              <h2 className='video-title blu-dot title'>Video</h2>
            </Col>
            <Col sm={12} className='position-relative'>
              <Link to={/example/} className='d-block'><Image className='video-img image' src={template}/></Link>
              <h4 className='video-subtitle'>Видео(пример)</h4>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Video;
