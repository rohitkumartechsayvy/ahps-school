import './App.css';
import { Link } from 'react-router-dom';
import classes1 from './assets/images/classes1.jpg';
import classes2 from './assets/images/classes2.jpg';
import classes3 from './assets/images/classes3.jpg';
import choose1 from './assets/images/football.jpeg';
import skating from './assets/images/skating.jpg';
import science from './assets/images/science.jpg';
import music from './assets/images/music.jpg';
import arts from './assets/images/arts.jpg';
import slider_img from './assets/images/courses/slider-img.jpg';
import carnival from './assets/images/carnival.jpg';
import left_shape from './assets/images/left-shape.png';
import news_img1 from './assets/images/news/img1.jpeg';
import addmission from './assets/images/addmission.jpeg';
import news_img2 from './assets/images/news/img.jpg';
import news_img3 from './assets/images/news/img3.png';
import shape from './assets/images/shape.png';
import RoboticClassess from "./assets/images/RoboticsClasses.jpeg";
import himachalDay from "./assets/images/himachalDay.jpeg";
import AnnualDay from "./assets/images/AnnualDay.jpeg";
import Slider from './Slider';
import ContactSection from './pages/ContactSection';
function Home() {
  return (
    <div className="home">
      <Slider />
      {/* <!-- Service area --> */}
      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="service-icon">
                  <i className="flaticon-clock"></i>
                </div>
                <div className="service-content">
                  <h2>Opening Hours</h2>
                  <p>Mon - Fri : 08:30AM - 02:30PM (<strong>Winters</strong>)</p>
                  <p>Mon - Fri : 08:10AM - 02:10PM(<strong>Summer</strong>)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="service-icon">
                  <i className="flaticon-pin"></i>
                </div>
                <div className="service-content">
                  <h2>Address</h2>
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
                  <h2>Contact Information</h2>
                  <p>+91-97368 59537</p>
                  <p>contact@ahpsDharamshala.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Service area --> */}

      <div className="shape-ellips">
        <img src={shape} alt="shape" />
      </div>

      {/* <!-- Regular Course area  --> */}

      <section className="home-ragular-course pb-100">
        <div className="container">
          <div className="section-tittle text-center">
            <h2>Our Regular Classes</h2>
            <p>Our regular classes are based on the CBSE pattern and curriculum and aim for the holistic development of our children.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-ragular-course">
                <div className="course-img">
                  <img src={classes1} alt="ragular" />
                  <h2>Class I-V</h2>
                </div>
                <div className="course-content">
                  {/* <p>
                    A classroom is a learning space, a room in which both children and adults learn.Parts of
                    education.
                  </p> */}
                  <Link to='/junior-classes' className="border-btn">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-ragular-course">
                <div className="course-img">
                  <img src={classes2} alt="ragular" />
                  <h2>Class VI-VIII</h2>
                </div>
                <div className="course-content">
                  {/* <p>
                    A classroom is a learning space, a room in which both children and adults learn.Parts of
                    education.
                  </p> */}
                  <Link to='/senior-classes' className="border-btn">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 sst-10">
              <div className="single-ragular-course">
                <div className="course-img">
                  <img src={classes3} alt="ragular" />
                  <h2>Class IX-XII</h2>
                </div>
                <div className="course-content">
                  {/* <p>
                    A classroom is a learning space, a room in which both children and adults learn.Parts of
                    education.
              </p> */}
                  <Link to='/higher-classes' className="border-btn">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Regular Course area  --> */}

      {/* <!-- Choose area  --> */}
      <section className="choose-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 pl-0">
              <div className="home-choose-img">
                <img src={choose1} alt="choose" className="home_choose_img" />
              </div>
            </div>

            <div className="col-lg-6 home-choose">
              <div className="home-choose-content">
                <div className="section-tittle">
                  <h2>Why Choose Achievers' Hub Senior Secondary School?</h2>
                  <p>
                    School choice theory assumes that parents are rational actors that can gather and
                    consume information to find a school that matches their child's needs. Parents' desires
                    and ability to choose quality schools.
              </p>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-sm-12 col-md-5">
                    <ul className="choose-list-left">
                      <li className="text-left"> <i className="flaticon-check-mark"></i>Great Behaviour</li>
                      <li className="text-left"><i className="flaticon-check-mark"></i>Helpful & Kindnesss</li>
                      <li className="text-left"><i className="flaticon-check-mark"></i>Learning With Fun</li>
                      <li className="text-left"><i className="flaticon-check-mark"></i>Children Safety</li>
                    </ul>
                  </div>
                  <div className="col-lg-8 col-sm-12 col-md-7">
                    <div className="choose-list-home">
                      <ul>
                        <li className="text-left"> <i className="flaticon-check-mark"></i>Eco Freindly Environment</li>
                        <li className="text-left"><i className="flaticon-check-mark"></i>Huge Playground With Children Park</li>
                        <li className="text-left"><i className="flaticon-check-mark"></i>Physically Fit Buses With Experienced
                      Driver</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Choose area --> */}

      {/* <!-- Special Course --> */}
      <section className="home-special-course">
        <div className="container-fluid">
          <div className="section-tittle text-center">
            <h2>Our Special Classes</h2>
            <p>
              Our special classes include  Robotics classes, Art and Craft, Music, Skating, Karate and various vocational classes.
        </p>
          </div>

          <div className="home-course-slider owl-carousel owl-theme">
            <div className="single-home-special-course">
              <div className="course-img">
                <img src={skating} alt="course" />
                <div className="course-content">
                  <h2>Skating Classes</h2>
                  <p>
                    Roller-skating, recreational and competitive sport in which the participants use special shoes fitted with small wheels to move about on rinks or paved surfaces.
              </p>
                </div>
              </div>
            </div>

            <div className="single-home-special-course">
              <div className="course-img">
                <img src={music} alt="course" />
                <div className="course-content">
                  <h2>Music classes</h2>
                  <p>
                    Music education is a field of practice, in which educators are trained for careers as elementary or secondary music teachers, school or music conservatory ensemble directors
              </p>

                </div>
              </div>
            </div>

            <div className="single-home-special-course">
              <div className="course-img">
                <img src={science} alt="course" />
                <div className="course-content">
                  <h2>Science classes</h2>
                  <p>
                    All science courses are intended to allow individuals to understand the relationships that science, technology, and society share in our everyday world. Each subject uses laboratory, classroom, and technology activities to illustrate the nature of science and how scientific knowledge evolves.
              </p>

                </div>
              </div>
            </div>

            <div className="single-home-special-course">
              <div className="course-img">
                <img src={arts} alt="course" />
                <div className="course-content">
                  <h2>Art Classes</h2>
                  <p>
                    Emphasis is placed on understanding the Elements of Art and Principles of Design as a basis for composition. Students will explore a variety of artists, art processes and materials such as drawing, painting, printmaking, two & three-dimensional design, and digital art.
              </p>

                </div>
              </div>
            </div>

            <div className="single-home-special-course">
              <div className="course-img">
                <img src={RoboticClassess} alt="course" />
                <div className="course-content">
                  <h2>Robotics classes</h2>
                  <p>
                  The Robotics classes we offer are designed to help prepare you for a career in automation design, robotic systems engineering, AI implementation, and mechatronics, providing you with the technical skills to develop and manage advanced robotic solutions.
              </p>

                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* <!-- End Special Course --> */}

      {/* <!-- Course Slider  --> */}
      <section className="course-slider-area">
        <div className="container">
          <div className="course-slider owl-carousel owl-theme">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5">
                <div className="course-slider-img">
                  <img src={AnnualDay} alt="course" />
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="course-slider-content">
                  <h2>Annual Day</h2>
                  <p>
                       Annual day celebrations can be a great opportunity for a school to come together and celebrate achievements over the past year</p>

                 
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5">
                <div className="course-slider-img">
                  <img src={carnival} alt="course" />
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="course-slider-content">
                  <h2>Achievers’ Carnival</h2>
                  <p>
                    The word ‘carnival’ itself brings forth tremendous excitement in the hearts of kids and adults alike. The word spells enjoyment and an occasion of fun with friends and family. Every alternate year our school organises a carnival for us students, our families and friends. It is indeed a great occasion for all to get together and enjoy.
              </p>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Course Slider --> */}

      <span className="left-shape">
        <img src={left_shape} alt="shape" />
      </span>

      {/* <!-- News Area --> */}
      <section className="home-news pb-100 pt-100">
        <div className="container">
          <div className="section-tittle text-center">
            <h2>Our daily news update</h2>
          </div>

          <div className="row">
            <div className="col-lg-4=col-md-6 col-md-6">
              <div className="single-home-news">
                <a href="single-news.html">
                  <img src={addmission} alt="news" />
                </a>

                <div className="single-home-content">
                  <h2>Admissions Open</h2>
                  <p className="calender">
                    <i className="flaticon-calendar"></i> 1st April, 2024
              </p>
                  <p>
                     We are pleased to announce that for class XI(Science, Commerce, Humanities) addmission are open (2024-2025). 
           </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-home-news">
                <a href="single-news.html">
                  <img src={himachalDay} alt="news" />
                </a>

                <div className="single-home-content">
                  <h2>Himachal Day</h2>
                  <p className="calender">
                    <i className="flaticon-calendar"></i>  April, 2023
              </p>
                  <p>
                  Himachal day is celebrated on 15 April every year to mark the decleration of Himachal Pradesh as a province of India in 1948.
                  </p>  
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      {/* <!-- End News Area --> */}
      <ContactSection />
    </div>
  );
}


export default Home;
