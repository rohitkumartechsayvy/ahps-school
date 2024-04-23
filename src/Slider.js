import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Slider() {
  const options = {
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    items: 1,
    loop: true,
    autoPlay: false,
    dots: false,
    nav: true,
    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next'></i>"],
    autoheight: "true",
    autoplaySpeed: 800,
    mouseDrag: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 1,
      }
    }
  };
  return (
    <div className="slider">
      {/* <!-- Slider area --> */}
      <section className="slider-area">
        <OwlCarousel
          className="home-slider owl-carousel owl-theme"
          loop
          margin={10}
          nav
          {...options}
        >
          <div className="single-slider single-slider-bg-1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                      <div className="slider-tittle one">
                        <h1>
                          Welcome To Our School
                    </h1>
                        <p>
                          Way back in the year 2008 the advent of Achievers’ Hub Senior Secondary School on the soil of Dharamshala
                          opened a new chapter in the history of primary to heigher education. It was whole heartedly
                          welcome by the people , and now this renewed educational foundation is all set to fulfil the long
                          cherished dreams of the common people to educare their wards in an english medium school.AHPS aims
                          devoted students. After all schools are places where citizens of tomorrow are bred.
                    </p>
                      </div>
                      <div className="slider-btn bnt1 text-center">
                        <a href="https://forms.gle/dvaFCFjDi4JSLBmM8" target="_blank" rel="noopener noreferrer" className="box-btn">Apply for Online Admission</a>
                        {/* <a href="special-class.html" className="border-btn">View Courses</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider single-slider-bg-2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                      <div className="slider-tittle two">
                        <h1>Let the light come us from all the directions</h1>
                      </div>
                      <div className="slider-btn bnt2">
                        <a href="https://forms.gle/Mes9Ne7NcyxUyMnk8" target="_blank" rel="noopener noreferrer" className="box-btn">Apply for Online Admission</a>
                        {/* <a href="special-class.html" className="border-btn">View Courses</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </OwlCarousel>
        {/* <div className="home-slider owl-carousel owl-theme">
        </div> */}
      </section>
      {/* <!-- End Slider aera --> */}
    </div>
  );
}


export default Slider;
