import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Home from './Home';
import About from './pages/About';
import Message from './pages/Message';
import JuniorClasses from './pages/JuniorClasses';
import SeniorClasses from './pages/SeniorClasses';
import HigherClasses from './pages/HigherClasses';
import Faculty from './pages/Faculty';
import Report from './pages/Report';
import Contact from './pages/Contact';
import logo from './assets/images/logo3.png';
import axios from 'axios';
import setSyllabuses from 'react';

/*
syllabuses = [{
  class_name: "I (A)",
  syllabus: "https://ahpsdharamshala.co.in/admin.ahpsdharamshala.co.in/public/storage/profile/profile_image_604db815f3df6.JPG",
},
{
  class_name: "I (A)",
  syllabus: "https://ahpsdharamshala.co.in/admin.ahpsdharamshala.co.in/public/storage/profile/profile_image_604db815f3df6.JPG",
},
{
  class_name: "I (A)",
  syllabus: "https://ahpsdharamshala.co.in/admin.ahpsdharamshala.co.in/public/storage/profile/profile_image_604db815f3df6.JPG",
},
{
  class_name: "I (A)",
  syllabus: "https://ahpsdharamshala.co.in/admin.ahpsdharamshala.co.in/public/storage/profile/profile_image_604db815f3df6.JPG",
}]; */
function App() {
  const [syllabuses, setSyllabuses] = useState([]);
  useEffect(() => {
    axios.get('https://ahpsdharamshala.co.in/admin.ahpsdharamshala.co.in/public/api/v1/get-syllabuses').then((res) => {
      setSyllabuses(res.data.response)
    });
  });
  return (
    <BrowserRouter>
      <div className="App">

        {/* <!-- Preloader --> */}
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="object" id="object_one"></div>
              <div className="object" id="object_two"></div>
              <div className="object" id="object_three"></div>
              <div className="object" id="object_four"></div>
            </div>
          </div>
        </div>
        {/* <!-- End Preloader --> */}

        {/* <!-- Start Navbar Area --> */}
        <div className="navbar-area">
          <div className="mobile-nav">
            <Link to='' className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="main-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to='' className="navbar-brand pl-3">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav text-right">
                    <li className="nav-item">
                      <Link to='' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/about' className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/message' className="nav-link">Message</Link>
                    </li>
                    <li className="nav-item">
                      <a href="https://ahpsdharamshala.co.in/staff.pdf" rel="noopener noreferrer" target="_blank" className="nav-link">Staff</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://ahpsdharamshala.co.in/Mandatory-Public-Disclosure.pdf" rel="noopener noreferrer" target="_blank" className="nav-link">Mandatory Disclosure</a>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/" href="http://www.ahpsdharamshala.com/pdf/cbse.pdf" className="nav-link">CBSE Affiliation - <strong>630210</strong></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/financial-report' className="nav-link">Financial Report</Link>
                        </li>
                      </ul> */}
                    </li>

                    <li className="nav-item">

                      <a href="https://ahpsdharamshala.schoolpad.in" rel="noopener noreferrer" target="_blank" className="nav-link">Login</a>
                    </li>
                    {/*<li className="nav-item">
                      <Link to='' className="nav-link dropdown-toggle">Download</Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to={'/'} className="nav-link">Enquiry Form</Link>
                        </li>
                        <li className="nav-item">
                          <Link to={'/'} className="nav-link">Registration Form</Link>
                        </li>
                        <li className="nav-item">
                          <Link to={'/'} className="nav-link">Admission Form</Link>
                        </li>
                      </ul>
                    </li>*/}
                    <li className="nav-item">
                      <Link to='/contact' className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <a href="https://ahpsdharamshala.co.in/TRANSFERCERTIFICATE.pdf" rel="noopener noreferrer" target="_blank" className="nav-link">TC</a>
                    </li>


                    {/* <li className="nav-item">
                      <a href="https://admin.ahpsdharamshala.co.in/" target="_blank" rel="noopener noreferrer" className="nav-link">Login</a>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- End Navbar Area --> */}

        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/message" component={Message}></Route>
          <Route exact path="/faculty" component={Faculty}></Route>
          <Route exact path="/financial-report" component={Report}></Route>
          <Route exact path="/junior-classes" component={JuniorClasses}></Route>
          <Route exact path="/senior-classes" component={SeniorClasses}></Route>
          <Route exact path="/higher-classes" component={HigherClasses}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="" component={Home}></Route>
        </Switch>




        {/* <!-- Footer Area --> */}
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-left">
                  {/* <Link to={'/'} className="logo"> */}
                  <img src={logo} alt="logo" />
                  {/* </Link> */}
                  <h4 className="text-white">“Achieving Excellence Together”</h4>
                  <ul className="footer-social">
                    <li key={`icon1`}>
                    
                        <a href='https://www.facebook.com/ahpsdshala?mibextid=uzlslk'  target="_blank"><i className="flaticon-facebook"></i></a> 
                      
                    </li>
                    {/* <li key={`icon2`}>
                      <Link to={'/'}><i className="flaticon-twitter"></i></Link>
                    </li>
                    <li key={`icon3`}>
                      <Link to={'/'}><i className="flaticon-envelope"></i></Link>
                    </li>
                    <li key={`icon4`}>
                      <Link to={'/'}><i className="flaticon-google-plus"></i></Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-content fml-15 text-left">
                  <h2>Quick Links</h2>
                  <ul>
                    <li key={`icon5`}>
                      <Link to={'/'}><i className="flaticon-next"></i> Home</Link>
                    </li>
                    <li key={`icon6`}>
                      <Link to={'/'}><i className="flaticon-next"></i> Classes</Link>
                    </li>
                    <li key={`icon7`}>
                      <Link to={'/'}><i className="flaticon-next"></i> Courses</Link>
                    </li>
                    <li key={`icon8`}>
                      <Link to={'/about'}><i className="flaticon-next"></i> About Us</Link>
                    </li>
                    <li key={`icon9`}>
                      <Link to={'/'}><i className="flaticon-next"></i> FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-content fml-15 fml-20 text-left">
                  <h2>Find Us</h2>
                  <ul>
                    <li key={`icon10`}>
                      <Link to={"/"}><i className="flaticon-next"></i>+91-97368 59537</Link>
                    </li>
                    <li key={`icon14`}>
                      <a href="mailto:contact@ahpsdharamshala.co.in"><i className="flaticon-next"></i>ahpsdharamshala@gmail.com</a>
                    </li>
                    <li key={`icon13`}>
                      <Link to={"/"}>
                        <i className="flaticon-next"></i>
                        Achievers' Hub Senior Secondary School, Dharamshala (H.P.)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer Area --> */}

        {/* <!-- Copy Area --> */}
        <div className="copy-area">
          <div className="container">
            <div className="col-lg-12">
              <div className="row">
                <div className="copy">
                  <p>
                    Copyright @2020 Achievers’ Hub Senior Secondary School. All Rights Reserved by <a href="https://ahpsdharamshala.co.in/" target="_blank" rel="noopener noreferrer">Achievers’ Hub Senior Secondary School</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Copy Area --> */}

        {/* <!-- Scroll top --> */}
        <Link to="" className="scroll-top wow bounceInDown">
          <i className="fas fa-angle-double-up"></i>
        </Link>
      </div>
    </BrowserRouter>
  );
}
export default App;
