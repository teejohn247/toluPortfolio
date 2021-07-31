import React, { Fragment } from 'react';



const Footer = () => {
    return ( 
        <Fragment>
        <footer className="mh-footer mh-footer-3" id="footer">
        <div className="container-fluid">
          <div className="row section-separator">
            <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <h3>Contact Me</h3>
            </div>
            <div className="map-image image-bg col-sm-12">
              <div className="container mt-30">
                <div className="row">
                  <div className="col-sm-12 col-md-6 mh-footer-address">
                    <div className="col-sm-12 xs-no-padding">
                      <div className="mh-address-footer-item dark-bg shadow-1 media wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <div className="each-icon">
                          <i className="fa fa-location-arrow" />
                        </div>
                        <div className="each-info media-body">
                          <h4>Address</h4>
                          <address>
                            13, Yemi Matanmi Street, Off Egbado Road, <br />
                            Dalemo, Alakuko,Lagos State
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 xs-no-padding">
                      <div className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                        <div className="each-icon">
                          <i className="fa fa-envelope-o" />
                        </div>
                        <div className="each-info media-body">
                          <h4>Email</h4>
                          <a href="mailto:teejohn247@gmail.com">teejohn247@gmail.com</a><br />
                          <a href="mailto:tolujohnson247@gmail.com">tolujohnson007@gmail.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 xs-no-padding">
                      <div className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                        <div className="each-icon">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="each-info media-body">
                          <h4>Phone</h4>
                          {/* <a href="callto:+2348085362264">08085362264</a><br /> */}
                          <a href="callto:+2348161582274">08161582274</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <form id="contactForm" className="single-form quate-form wow fadeInUp" data-toggle="validator">
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="row">
                        <div className="col-sm-12">
                          <input name="name" className="contact-name form-control" id="name" type="text" placeholder="First Name" required />
                        </div>
                        <div className="col-sm-12">
                          <input name="name" className="contact-email form-control" id="L_name" type="text" placeholder="Last Name" required />
                        </div>
                        <div className="col-sm-12">
                          <input name="name" className="contact-subject form-control" id="email" type="email" placeholder="Your Email" required />
                        </div>
                        <div className="col-sm-12">
                          <textarea className="contact-message" id="message" rows={6} placeholder="Your Message" required defaultValue={""} />
                        </div>
                        {/* Subject Button */}
                        <div className="btn-form col-sm-12">
                          <button type="submit" className="btn btn-fill btn-block" id="form-submit">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="text-left text-xs-center">
                          <p>All right reserved Tolu Johnson @ 2021</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <ul className="social-icon">
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-github" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </Fragment>
      
    )
}

export default Footer;