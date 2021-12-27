import React from "react";
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { IconName } from "react-icons/bs";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Video from "./Pages/Video";
import Blog from "./Pages/Blog";
import Courses from "./Pages/Courses";
import Trainings from "./Pages/Trainings";
import Workshops from "./Pages/Workshops";
import Consultations from "./Pages/Consultations";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/video' element={<Video />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/trainings' element={<Trainings />} />
          <Route path='/workshops' element={<Workshops />} />
          <Route path='/consultations' element={<Consultations />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

