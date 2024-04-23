import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import contact_shape from './../assets/images/contact-shape.png';
import 'react-toastify/dist/ReactToastify.css';
import ContactSection from './ContactSection';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact_main" >
        {/* <!-- Start Page Title Area --> */}
        <div className="banner-area contact" >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-content">
                  <h2>Contact Us</h2>
                  <ul>
                    <li key={`icon1`}>
                      <Link to=''>Home</Link>
                      <i className="flaticon-fast-forward"></i>
                      <p className="active">Contact</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title Area --> */}

        < div className="shape-ellips-contact" >
          <img src={contact_shape} alt="shape" />
        </div >

        {/* <!-- Service area --> */}
        < div className="contact-service" >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single-service text-center">
                  <div className="service-icon">
                    <i className="flaticon-clock"></i>
                  </div>
                  <div className="service-content">
                    <p>Mon - Fri : 08:30AM - 02:30PM (<strong>Winters</strong>)</p>
                    <p>Mon - Fri : 08:00AM - 02:00PM(<strong>Summer</strong>)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-service text-center">
                  <div className="service-icon">
                    <i className="flaticon-pin"></i>
                  </div>
                  <div className="service-content">
                    <p>Achievers' Hub Senior Secondary School, Dharamshala (H.P.)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="single-service text-center sst-10">
                  <div className="service-icon">
                    <i className="flaticon-telephone"></i>
                  </div>
                  <div className="service-content">
                    <p>+91-97368 59537</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
        {/* <!-- End Service area --> */}
        {/* <!-- Contact Area --> */}
        <ContactSection />
        {/* <!-- End Contact Area --> */}
      </div >
    );
  }
}
