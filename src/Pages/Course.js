import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
// import photo from "../assets/photo.jpeg";
// import { Link } from "react-router-dom";
// import { useParam } from "react-router-dom";
import { useState, useEffect} from "react";
// import work from "../assets/work.jpeg";
import spinner from "../assets/spinner.svg";
import CourseComponent from "../Components/CourseComponent";

const Course = ({match}) => {
  // const {id} = useParam();
  const id = match.params.id;
  const [course, setCourse] = useState(null);
  const [language, setLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(result => {
        console.log('result = ', result);
        setCourse(result);
        setIsLoading(false);
      });
  }, [id])

  return(
    <>
      {isLoading
        ?
        <div className='wrapper-spinner'>
          <Image src={spinner} className='spinner' alt='spinner'/>
        </div>
        :
        <div id='course'>
          <Header
            background={'gray-bg'}
          />
          <section className='course section'>
            <Container>
              <Row>
                <Col sm={12} className='text-center'>
                  <h2 className='course-title blu-dot title'>course.title</h2>
                </Col>
              </Row>
              <CourseComponent course={course}/>
              <Row className='color-wrapper'>
                <div className='border-wrapper'></div>
                <Col sm={12}>
                  <div className='send-wrapper'>
                    <Row>
                      <Col sm={12}>
                        <h3 className='send-title yellow-dot'>
                          Давайте обсудим  чем я могу вам помочь..
                        </h3>
                        <Form id='form-send' className='form-send'>
                          <Row>
                            <Col lg={4} md={12}>
                              <Form.Control id='name' className='send-input mb-3' type='text' placeholder="Имя" />
                            </Col>
                            <Col lg={4} md={12}>
                              <Form.Control id='phone' className='send-input mb-3' type='phone' placeholder='+38 (___) ___-__-__ ' />
                            </Col>
                            <Col lg={4} md={12}>
                              <Button className="btn-send btn btn-orange text-center m-0" type="submit">Записаться</Button>
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer/>
        </div>
      }
    </>
  );
}

export default Course;
