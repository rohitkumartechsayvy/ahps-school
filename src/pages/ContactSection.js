import React from 'react';
import './../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import contact from './../assets/images/logo1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      subject: '',
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  reset = () => {
    this.setState({
      name: '', email: '', message: '', subject: '', phone_number: '',
    });
  }

  handleChange = event => {
    console.log('event', event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    let params = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      subject: this.state.subject,
      message: this.state.message,
    };
    axios.post('https://ahpsdharamshala.co.in/admin.ahpsdharamshala.co.in/public/api/v1/contact-us', params).then((res) => {
      console.log(res.data);
      if (res.data.statusCode === 200) {
        toast.success('Query Sent Successfully!', {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        this.reset();
        setTimeout(500);

      } else {
        toast.error(res.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setTimeout(500);
      }
    })
    return;
  }
  render() {
    return (
      <div className="contact_main" >
        <br /><br />
        <ToastContainer />
        {/* <!-- Contact Area --> */}
        <section className="home-contact-area pb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 pl-0">
                <div className="contact-img">
                  <img src={contact} alt="contact" width="60%" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home-contact-content">
                  <h2>What Do You Want to Know?</h2>
                  <form id="contactForm" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input type="text" name="name" id="name" className="form-control" value={this.state.name} required
                            data-error="Please enter your name" placeholder="Your Name" onChange={this.handleChange} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input type="email" name="email" id="email" className="form-control" value={this.state.email} required
                            data-error="Please enter your email" placeholder="Your Email" onChange={this.handleChange} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input type="text" name="phone_number" id="phone_number" value={this.state.phone_number} required
                            data-error="Please enter your number" className="form-control"
                            placeholder="Your Phone" onChange={this.handleChange} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input type="text" name="subject" id="subject" value={this.state.subject} className="form-control"
                            required data-error="Please enter your subject"
                            placeholder="Your Subject" onChange={this.handleChange} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea name="message" className="form-control" value={this.state.message} id="message" cols="30" rows="5"
                            required data-error="Write your message"
                            placeholder="Your Message" onChange={this.handleChange}></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button className="default-btn page-btn box-btn">
                          Send Message
                                    </button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Area --> */}

      </div >
    );
  }
}
