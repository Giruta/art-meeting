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

const App = () => {
  return (
    <Router>
      <div className='App'>
        {/*<Header />*/}
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/video' element={<Video />} />
            <Route exact path='/blog' element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

