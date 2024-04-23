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
                  <h2>About</h2>
                  <ul>
                    <li key={`icon1`}>
                      <Link to=''>Home</Link>
                      <i className="flaticon-fast-forward"></i>
                      <p className="active">About</p>
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
          <div className="section-tittle text-center">
            <h2>About Us</h2>
            <p>Achiever's Hub Public School-"A house fo Achievers". We welcomes your child to the new world of education. The school and its environment will offer a very happy setting to our young students to learn and grow. We believe that each child is blessed wit divine potential and if nutured righteously, he or she can attain peak heights. The progress and future of a nation depends upon the youth and how well nutured they are. On the whole, the school education is a unique investment in the present to take care of the future.</p>
          </div>
        </div>
      </div>

      {/* <!-- End Testimonials --> */}

    </div>
  );
}

export default About;
