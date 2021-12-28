import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import work from "../assets/work.jpeg";
import {Link} from "react-router-dom";
import spinner from "../assets/spinner.svg";

const Courses = () => {
  const [courses, setCourses] = useState({});
  const [language, setLanguage] = useState('');
  const [pageId, setPageId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(result => {
        console.log('result = ', result);
        setCourses(result);
        setIsLoading(false);
      });
  }, []);

  return(
    <>
      {isLoading
      ?
      <div className='wrapper-spinner'>
        <Image src={spinner} className='spinner' alt='spinner'/>
      </div>
      :
      <div id='courses'>
        <Header background={'green-bg'}/>
        <section className='courses section'>
          <Container>
            {
              courses.map(course => {
                <Link key={course.id} to={`/courses/${course.id}`}>
                  <li>{course.title}</li>
                </Link>
              })
            }
            {/*<Row className='justify-content-center'>*/}
            {/*  <Col sm={10} className='position-relative'>*/}
            {/*    <Link to={'/'} className='d-block'><Image className='courses-img image' src={work}/></Link>*/}
            {/*    <h4 className='courses-title subtitle'>Курс(пример)</h4>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
          </Container>
        </section>
        <Footer/>
      </div>
      }
    </>
  );
}

export default Courses;
