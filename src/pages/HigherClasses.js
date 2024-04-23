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
                  <h2>Class IX-XII</h2>
                  <ul>
                    <li key={`icon1`}>
                      <Link to=''>Home</Link>
                      <i className="flaticon-fast-forward"></i>
                      <p className="active">Class IX-XII</p>
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
                <h2>Class IX-XII</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials-foot">
                <p>Students in our Senior classes have an abundance of opportunities to excel and lead through rigorous academics, competitive athletics and extracurriculars. Highly trained faculty challenge students to reach their full potential. As an independent school, we continue our founding traditions and teaching methodologies . The heart of our mission is to educate leaders of character who will value and improve the world they inherit. Here in a warm, inclusive culture, every child is known, their God-given talents are valued and relationships flourish. Our culture encourages students to stretch beyond their comfort zone and explore new interests. We want all students to find something that interests them, and if not, we encourage our students to start something new.</p>
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
