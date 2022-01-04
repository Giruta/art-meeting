import React from "react";
// import {Link} from "react-router-dom";
import {Col, Image, Row} from "react-bootstrap";
import work from "../../assets/work.jpeg";
// import {useParams} from "react-router";

const CourseComponent = (props) => {
  // const {id} = useParams();
  const {course} = props.course;
    return (
      <Row className='justify-content-center'>
        <Col sm={10} className='position-relative'>
          <Image className='course-img image' src={work}/>
          {/*<Image className='course-img image' src={course.src}/>*/}
          <h4 className='course-title subtitle'>{course.title}</h4>
        </Col>
      </Row>
    )
}

export default CourseComponent;
