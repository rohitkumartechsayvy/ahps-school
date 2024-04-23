import React from 'react';
import './../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';

function Reports() {
  return (
    <div className="faculty">
      {/* <!-- Start Page Title Area --> */}
      <div className="banner-area testimonials">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Financial Report</h2>
                <ul>
                  <li key={`icon1`}>
                    <Link to=''>Home</Link>
                    <i className="flaticon-fast-forward"></i>
                    <p className="active">Financial Report</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title Area --> */}
      <div className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <h2>Financial Report</h2>
                <hr />
              </div>
            </div>
          </div>
          <section className="single-teacher-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-5">
                  <div className="right-content">
                    <div className="single-teacher">
                      <div className="row text-left">
                        <div className="col-9 col-md-8">
                          <div className="content pl-5">
                            <a target="_blank" rel="noopener noreferrer" href="http://www.ahpsdharamshala.com/bs15.pdf">
                              <h2>Financial Report (2014-2015 (PDF)</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-teacher">
                      <div className="row text-left">
                        <div className="col-9 col-md-8">
                          <div className="content pl-5">
                            <a target="_blank" rel="noopener noreferrer" href="http://www.ahpsdharamshala.com/bs15.pdf">
                              <h2>Financial Report (2015-2016 (PDF)</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-teacher">
                      <div className="row text-left">
                        <div className="col-9 col-md-8">
                          <div className="content pl-5">
                            <a target="_blank" rel="noopener noreferrer" href="http://www.ahpsdharamshala.com/bs17.pdf">
                              <h2>Financial Report (2016-2017 (PDF)</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default Reports;
