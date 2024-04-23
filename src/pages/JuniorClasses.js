import './../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about2">
      <div className="about">
        {/* <!-- Start Page Title Area --> */}
        <div className="banner-area testimonials">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-content">
                  <h2>Class I-V</h2>
                  <ul>
                    <li key={`icon1`}>
                      <Link to=''>Home</Link>
                      <i className="flaticon-fast-forward"></i>
                      <p className="active">Class I-V</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title Area --> */}
      </div>
      {/* <!-- Testimonials --> */}
      <div className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <h2>Class I-V</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials-foot">
                <p>A Classroom is a space where students learn in a group under an expert's supervision. we aim to create an ambiance where learning is an amalgamation of traditional yet modern methodology. Our teachers are well versed and have advanced knowledge of their subjects. Most of the students who enroll in these classes belong to the age group of 11-13 the phase where teaching and learning both need a more specific approach. For some students, the transition from one class to another could be a bumpy ride. The students could feel an increase and upping of their responsibility, grade competition, multiple project-based learning where the involvement from parents is lesser and more indulgence by the students themselves. we ensure all these transitions are done like a cakewalk all while delving into learning and developing a sense of independence. Our classroom programs also include audio-visual aids of teaching which makes learning more fun and creates a better attention span. we focus not only on making students learn a topic rater our focus in to make them aware so that they make better choices for themselves</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Testimonials --> */}

    </div>
  );
}

export default About;
