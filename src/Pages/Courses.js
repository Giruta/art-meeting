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
  const [error, setError] = useState('');

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const fetchData = async () => {
      try{
        setIsLoading(true);
        const result = await fetch(url);
        const json = await result.json();
        setCourses(json);
        setIsLoading(false);
        console.log(json)
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  const useCourses = Array.from(courses).map((course) => {
    return (
        // <Link key={course.id} to={`/courses/${course.id}`}>
        //   <li>{course.title}</li>
        // </Link>
      <Link key={course.id} to={`/courses/${course.id}`}>
        <CourseComponent course={course} />
      </Link>
      )
  })

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
              <ul className='mt-5'>
                {courses && useCourses}
              </ul>
            </Container>
          </section>
          <Footer/>
        </div>
      }
    </>
  );
}

export default Courses;
