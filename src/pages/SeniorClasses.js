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
                  <h2>Class VI-VIII</h2>
                  <ul>
                    <li key={`icon1`}>
                      <Link to=''>Home</Link>
                      <i className="flaticon-fast-forward"></i>
                      <p className="active">Class VI-VIII</p>
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
                <h2>Class VI-VIII</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials-foot">
                <p>A Classroom is a space where students learn in a group under an expert's supervision. we aim to create an ambiance where learning is an amalgamation of traditional yet modern methodology. Our teachers are well versed and have advanced knowledge of their subjects. Most of the students who enroll in these classes belong to the age group of 11 to 15. These are the most crucial years as this is the phase when students get to decide the specific stream in which they plan on to excel. The focus during this phase is on understanding difficult conceptual and theoretical topics, personality development, extracurricular activities. All new sets of challenges come up and these challenges can create a lot of questions in young minds. We tend to provide our students with an environment where everyone is present to help them deal with any crisis they might come across. We conduct regular parent-teacher meetings, counseling sessions where students are able to put forth their issues related to studies or otherwise, and by constantly engaging their parents, clarity of thought is what we aim to provide our students with. As we all know these are the years which decides students successful career, we put our sincerest efforts in making it a walk of pride for teachers, students, and parents.</p>
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
