import './../App.css';
import principal from './../assets/images/principal.jpg';
import director from './../assets/images/dir2.jpg';
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
                  <h2>Our Message</h2>
                  <ul>
                    <li key={`icon1`}>
                      <Link to=''>Home</Link>
                      <i className="flaticon-fast-forward"></i>
                      <p className="active">Our Message</p>
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
                <h2>Director's Message</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div className="testimonials-img">
                        <img src={director} alt="testimonials" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Krishna Awasthi</h2>
                        <span>Director</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="testimonials-foot">
                  <h6>"Education must not simply teach work-it must teach life"</h6><br />
                  <p>When I look back at my life today, I feel that the best lessons that I learnt and in the most enjoyable manner, were the ones that I learnt as a child. The little habits of respecting myself and everyone else, the habit of being disciplined are attributes which have turned into life skills.</p><br />
                  <p>As Director of Achievers’ Hub Senior Secondary School, my effort is to instil amongst all children under our care, these life attributes. We a school, aim at nurturing citizens of tomorrow who are strong enough in every aspect of life and become the epitomes of success in any field they pursue.</p> <br />
                  <p>Growth is considered absolute only when it is reflected in all ways, that is, physical, emotional, intellectual, social and spiritual. At AHPS, We engage students in activities that prove conductive to such multifaceted growth. It is a promise that we have made to ourselves, to keep marching ahead with commitment and dedication. We look forward to co-operation and support from you all in this regard.</p>
                  <br />
                  <h5>Thank You</h5>
                  <h5>Krishna Awasthi</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <br />
                <h2>Principal's Message</h2>
                <hr />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-testimonials">
                <div className="testimonials-head">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                      <div className="testimonials-img">
                        <img src={principal} alt="testimonials" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-7">
                      <div className="content">
                        <h2>Dr. Jyotsana Dhiman</h2>
                        <span>Principal</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="testimonials-foot">
                  <h6>"Everyone is a genius. But if you judge a fish on its ability to climb a tree, it will live its whole life believing that it is stupid." - Albert Einstein</h6><br />
                  <p>Helping each child achieve his or her true potential is a daunting task which can be effectively performed only when we as a society work towards it. Effective teaching-learning process can be achieved only when the school and parent community work together.</p><br />
                  <p>The Biggest challenge that we face today is to ensure environment that is conductive to our children's betterment and development. We live in an age where we face the problem of 'too much' and 'too easy'. Just look around and you will see this problem manifest itself in plenty. Technology and social media is just one example, but a glaring one. It is robbing our children of their precious childhood. I request all the parents to kindly help us in restricting their wards' exposure to the same and exercise control and discipline. After all, it's our precious children whose well being is at stake.</p> <br />
                  <p>Instead, Lets invest efforts and time in helping our children learn how beautiful it is to appreciate Life and work towards making it a successful one.</p>
                  <br />
                  <h5>Warm Regards,</h5>
                  <h5>Dr. Jyotsana Dhiman</h5>
                </div>
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
