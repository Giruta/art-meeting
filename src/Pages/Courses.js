import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import work from "../assets/work.jpeg";
import {Link} from "react-router-dom";
import spinner from "../assets/spinner.svg";
import Course from "./Course";
import CourseComponent from "../Components/CourseComponent";

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
            <>
              <Link key={courses[15].id} to={`/courses/${courses[15].id}`}>
              <li>{courses[15].title}</li>
              </Link>
              <Link key={courses[1].id} to={`/courses/${courses[1].id}`}>
                <li>{courses[1].title}</li>
              </Link>
            </>

          {/*<>*/}
          {/*  {*/}
          {/*    Array.from(courses).forEach(course => {*/}
          {/*      <Link key={course.id} to={`/courses/${course.id}`}>*/}
          {/*        <li>{course.title}</li>*/}
          {/*        <CourseComponent course={course}/>*/}
          {/*      </Link>*/}
          {/*    })*/}
          {/*  }*/}
          {/*</>*/}


          </Container>
        </section>
        <Footer/>
      </div>
      }
    </>
  );
}

export default Courses;
