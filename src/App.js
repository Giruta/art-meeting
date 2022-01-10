import React, {useState} from "react";
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { IconName } from "react-icons/bs";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Video from "./Pages/Video";
import Blogs from "./Pages/Blogs";
import Courses from "./Pages/Courses";
import Trainings from "./Pages/Trainings";
import Workshops from "./Pages/Workshops";
import Consultations from "./Pages/Consultations";
import Course from "./Pages/Course";
import Blog from "./Pages/Blog";

const App = () => {
  const [content, setContent] = useState({});
  const [language, setLanguage] = useState('ru');
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Router basename="/art-meeting">
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/video' element={<Video />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/blogs/:id' element={<Blog />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path="/courses/:id" element={<Course />} />
          <Route exact path='/trainings' element={<Trainings />} />
          <Route exact path='/workshops' element={<Workshops />} />
          <Route exact path='/consultations' element={<Consultations />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

