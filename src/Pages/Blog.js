import React from "react";
// import { Text } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import template from "../assets/template.png";
import {Link} from "react-router-dom";
// import useFetch from "../Helpers/useFetch";

const Blog = () => {
  // const { data: projects, isPending, error } = useFetch('http://localhost:8080/projects');
  return(
    <div id='blog'>
      <Header background={'green-bg'}/>
      <section className='blog section'>
        <Container>
          <Row>
            <Col sm={12} className='text-center'>
              <h2 className='blog-title blu-dot title'>Blog</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Link to={/#/} className='d-block'><Image className='blog-img image' src={template}/></Link>
            </Col>
            <Col sm={12} md={6} className='mt-md-0 mt-3'>
              <h4 className='blog-title'>Публикация в блоге(пример)</h4>
              <h6>Some new</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis na…
              </p>
              <p>
                <span className='blog-date'>11 ноября 2020 г.</span>
                <span className='blog-time'>12:53</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Blog;
