import React, { Fragment } from 'react';




const Dashboard = () => {
    return ( 
        <Fragment>
  {/*
  ===================
     Home
  ===================
  */}
  <section className="mh-home image-bg home-2-img" id="mh-home">
    <div className="img-foverlay img-color-overlay">
      <div className="container">
        <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
          <div className="col-sm-6">
            <div className="mh-header-info">
              <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                <span>Hello I'm</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Ajuwon Tolu Johnson</h2>
              <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">Full Stack Engineer</h4>
              <ul>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope" /><a href="mailto:">teejohn247@gmail.com</a></li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i className="fa fa-phone" /><a href="callto:">08161582274, 08085362264</a></li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker" /><address>13, Yemi Matanmi Street, Off
                    Egbado Road,Dalemo, Alakuko,Lagos State</address></li>
              </ul>
              <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-github" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
              <div className="img-border"  style={{"border":"none"}}>
                <img src="images/tolu_img.jpg" alt className="img-fluid" style={{"height": "400px",
                "background": "black", 
                "object-fit": "contain",
                "background-position": "10px 10px",
                "background-size": "100px", "image-rendering": "-webkit-optimize-contrast"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*
  ===================
     ABOUT
  ===================
  */}
  <section className="mh-about" id="mh-about">
    <div className="container">
      <div className="row section-separator">
        <div className="col-sm-12 col-md-6">
        <div className="mh-about-inner">
            <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
            <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              Experienced software engineer adept in all stages of advanced web development.
              Knowledgeable in user interface, testing, and debugging processes. 
              Bringing forth expertise in design, installation, testing and 
              maintenance of web systems. Equipped with a diverse and promising skill-set. 
              Proficient in an assortment of technologies, including React Js, Node Js, Express Js
              ,MongoDB, MySQL, postgreSQL amongst others. Able to effectively self-manage
              during independent projects, as well as collaborate in a team setting.
            </p>
            <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
              <ul>
                <li><span>html</span></li>
                <li><span>css</span></li>
                <li><span>bootstrap</span></li>
                <li><span>Javascript</span></li>
                <li><span>React JS</span></li>
                <li><span>React Native</span></li>
                <li><span>Node Js</span></li>
                <li><span>Express Js</span></li>
                <li><span>Mongo DB</span></li>
                <li><span>WordPress</span></li>
                <li><span>MySQL</span></li>
                <li><span>postgreSql</span></li>
                <li><span>AJAX</span></li>
                <li><span>UI/UX</span></li>
                <li><span>photoshop</span></li>
                <li><span>corel draw</span></li>
              </ul>
            </div>
            <a href="https://drive.google.com/file/d/1Znox59AMn7RXaf-0DlstSSVKFsyRBSNO/view?usp=sharing" className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" download>View & Downlaod CV <i className="fa fa-download" /></a>
          </div>
          
        </div>
        <div className="col-sm-12 col-md-6">
        <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
            <img src="images/img.png" alt className="img-fluid" style={{ "marginTop": "100px", "image-rendering": "-webkit-optimize-contrast"}} />
          </div>
       
        </div>
      </div>
    </div>
  </section>
  {/*
  ===================
     SERVICE
  ===================
  */}
  <section className="mh-service">
    <div className="container">
      <div className="row section-separator">
        <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
          <h2>What I do</h2>
        </div>
        <div className="col-sm-4">
          <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
            <i className="fa fa-bullseye purple-color" />
            <h3>UI/UX Design</h3>
            <p>
              I bring an engineering perspective and creative
              problem-solving approach to create products and
              experiences people love to use. Perspective,curiosity
              and an obsessive attention to detail defines me.
            </p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
            <i className="fa fa-code iron-color" />
            <h3>Web App Development</h3>
            <p>
              I'm a creative web app developer dedicated to structuring,developing and implementing interactive 
              websites.Deeply knowledgeable in a wide variety of computer languages as 
              well as the techniques of website construction.
            </p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
            <i className="fa fa-object-ungroup sky-color" />
            <h3>Graphic Design</h3>
            <p>
              Highly creative Designer
              who conceptualises innovative design solutions
              for print, web, and applications. Skilled in a 
              variety of images, logos, and marketing packages 
              to strengthen business competence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*
  ===================
    FEATURE PROJECTS
  ===================
  */}



  
<section className="bg2">
    <div className="ver">
      <div className="container text-center ">
        <div className="row ">
          <div className="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
            <h3>Recent Programming Projects</h3>
          </div>
          <div id="myCarousel" className="carousel slide w-100" data-ride="carousel" style={{marginTop: '-100px'}}>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/pageant.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>REACT, TYPESCRIPT, REDUX, SOCKET.IO</h6>
                    <h1>Mr Ideal Nigeria</h1>
                    <h6>FRONTEND DEVELOPMENT</h6>
                    <p>This is a voting app that also has some social media app features such as post like, comments etc. This app was built with React Js, TypeScript, Redux and socket.io</p>
                    <a href="https://github.com/1024concepts/frontend-pageant">github repository here</a> 
                    {/* <a href="https://femope.com/" className="last" style={{width: '50%'}}>Visit Website</a> */}
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/lb.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>REACT, CSS</h6>
                    <h1>LB PLAYER</h1>
                    <h6>MUSIC PLAYER</h6>
                    <p>This is a spotify music player clone</p>
                    <a href="https://github.com/teejohn247/LB-PLAYER">github repository here</a> 
                    <br /><br />
                    <a href="https://lb-player.herokuapp.com/" className="last" style={{width: '70%', marginBottom: '100%'}}>Visit App</a>
                  </div>
                </div>
              </div>

              {/* <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/musicc.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>React Js, Node Js, Mongo DB, GridFs</h6>
                    <h1>MUSIC STREAMING APPLICATION</h1>
                    <h6>APPLICATION</h6>
                    <p>A Full Stack Streaming app built with React Js, Node Js, Mongo DB, GridFs</p>
                    <a href="https://github.com/teejohn247/Stream-Music">github repository here</a> 
                    <br /><br />
                  </div>
                </div>
              </div> */}


              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/PM.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}> NodeJs, Express, Mongo DB and gridFS</h6>
                    <h1>STREAMING API</h1>
                    <h6>API DEVELOPMENT</h6>
                    <p>This api was built with NodeJs,Express,Mongo DB and gridFS as database</p>
                    <a href="https://github.com/teejohn247/AudioStreamingEndpoints">github repository here</a> <br />
                    <br />
                    <a href="https://documenter.getpostman.com/view/7627645/TVmFkLZr" className="last" style={{width: '50%'}}>Api Documentation</a>
                  </div>
                </div>
              </div>


              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/port.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>NodeJs, Express, MongoDB</h6>
                    <h1>PORTFOLIO API</h1>
                    <h6>API DEVELOPMENT</h6>
                    <p>This api was built with NodeJs,Express,MongoDB as the database </p>
                    <a href="https://github.com/teejohn247/portfolioBackend">github repository here</a> <br />
                    <br />
                    <a href="https://documenter.getpostman.com/view/7627645/TzCJgAS3" className="last" style={{width: '50%'}}>Api Documentation</a>
                  </div>
                </div>
              </div>

              
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/PM.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>NodeJs, Express, socket.io, MongoDB</h6>
                    <h1>SOCIAL MEDIA APP ENDPOINTS</h1>
                    <h6>API DEVELOPMENT</h6>
                    <p>This api was built with NodeJs,Express, socket.io, MongoDB as the database </p>
                    <a href="https://github.com/teejohn247/devbook-backend">github repository here</a> <br />
                    <br />
                    <a href="https://documenter.getpostman.com/view/7627645/TzseKScg" className="last" style={{width: '50%'}}>Api Documentation</a>
                  </div>
                </div>
              </div>


              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/dev.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>SOFTWARE</h6>
                    <h1>DEV CONNECTOR</h1>
                    <h6>APPLICATION</h6>
                    <p>This application was built with ReactJS for the frontend and NodeJs,Express and MongoDB for the backend.
                    </p>
                    <a href="https://github.com/teejohn247/dev-connector">github repository here</a> 
                    <br /><br />
                    <a href="https://immense-ocean-50012.herokuapp.com/" className="last" style={{width: '70%', marginBottom: '100%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/api.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>NodeJs, Express, Mocha and Chai, PostgreSQL</h6>
                    <h1>ECOMMERCE API</h1>
                    <h6>API DEVELOPMENT</h6>
                    <p>This api was built with NodeJs,Express,Mocha and Chai(for testing),postgreSQL as the database and integrated with
                      Travis CI for continous integration </p>
                    <a href="https://github.com/teejohn247/Auto-Mart-Website">github repository here</a> <br />
                    <br />
                    <a href="https://automart-webapp.herokuapp.com/automart" className="last" style={{width: '50%'}}>Api Documentation</a>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/easy.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>EASYPROPERTY</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is an real estate listing website built with WordPress,PHP,HTML,CSS,JavaScript</p>
                    <a href="https://www.easypropertyng.com/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}
         
     
              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/heydensite.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>HEYDEN PETROLEUM</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is a website built with  HTML,CSS,JavaScript</p>
                    <a href="https://teejohn247.github.io/Frontend/factory.w3itexperts.com/xhtml/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          {/* content goes here */}                
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/emi.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>HTML, CSS, JavaScript and JQuery</h6>
                    <h1>EXCELLENT MINDS INITIATIVES</h1>
                    <h6>REGISTRATION PORTAL</h6>
                    <p>This is a portal built with  HTML,CSS,JavaScript and JQuery for the frontend while PHP and MySQL were used for the backend</p>
                    {/* <a href="https://www.emi.org.ng/" className="last" style={{width: '50%'}}>Visit Portal</a> */}
                  </div>
                </div>
              </div>
          
        
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{width: '200%'}}>
            <a className="carousel-control-prev text-dark" href="#myCarousel" role="button" data-slide="prev">
              <span className="fa fa-chevron-left text-white" aria-hidden="true" style={{width: '200%'}} />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next text-dark" href="#myCarousel" role="button" data-slide="next">
              <span className="fa fa-chevron-right text-white" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> 

  
  {/*
  ===================
     SKILLS
  ===================
  */}
  <section className="mh-skills" id="mh-skills">
    <div className="home-v-img">
      <div className="container">
        <div className="row section-separator">
          <div className="section-title text-center col-sm-12">
            {/*<h2>Skills</h2>*/}
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-skills-inner">
              <div className="mh-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <h3>Technical Skills</h3>
                <div className="each-skills">
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Javascript</div>
                        <div className="percentagem-num">86%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '86%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">React Js and Redux</div>
                        <div className="percentagem-num">86%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '86%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">HTML</div>
                        <div className="percentagem-num">100%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '100%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">CSS</div>
                        <div className="percentagem-num">80%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">BOOTSTRAP</div>
                        <div className="percentagem-num">85%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '85%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">WORDPRESS</div>
                        <div className="percentagem-num">85%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '85%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">PHP</div>
                        <div className="percentagem-num">50%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '50%'}} />
                      </div>
                    </div>
                  </div>                                    
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">NODE JS</div>
                        <div className="percentagem-num">75%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '75%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">MONGO DB</div>
                        <div className="percentagem-num">80%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">postgreSQL</div>
                        <div className="percentagem-num">80%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">MySQL</div>
                        <div className="percentagem-num">80%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">PHOTOSHOP</div>
                        <div className="percentagem-num">80%</div>
                      </div>
                      <div className="progressBar">
                        <div className="percentagem" style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-professional-skills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
              <h3>Professional Skills</h3>
              <ul className="mh-professional-progress">
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={95} />
                  <div className="pr-skill-name">Communication</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={100} /> 
                  <div className="pr-skill-name">Team Work</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={86} />
                  <div className="pr-skill-name">Project Management</div>
                </li> 
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={80} />
                  <div className="pr-skill-name">Creativity</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={95} />
                  <div className="pr-skill-name">Problem Solving</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={80} /> 
                  <div className="pr-skill-name">Time Management</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={86} />
                  <div className="pr-skill-name">Professionalism</div>
                </li> 
                <li>
                  <div className="mh-progress mh-progress-circle" data-progress={80} />
                  <div className="pr-skill-name">Accountablity</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*
  ===================
     EXPERIENCES
  ===================
  */}


<section className="bg2">
    <div className="ver">
      <div className="container text-center ">
        <div className="row ">
          <div className="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
            <h3>Other Projects</h3>
          </div>
          <div id="myCarouse" className="carousel slide w-100" data-ride="carousel" style={{marginTop: '-100px'}}>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/femopesite.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>HTML,CSS,JavaScript,PHP and MySQL</h6>
                    <h1>FEMOPE LIMITED</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>www.femope.com is a website built with  HTML,CSS,JavaScript,PHP and MySQL</p>
                    <a href="https://femope.com/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/wildfire.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>SOFTWARE</h6>
                    <h1>WILD FIRE APPLICATION</h1>
                    <h6>APPLICATION</h6>
                    <p>This is a React app to track wildfires and plot them on a Google map.</p>
                    <a href="https://github.com/teejohn247/wildFire-App">github repository here</a> 
                    <br /><br />
                    <a href="https://wild-fire-app.herokuapp.com/" className="last" style={{width: '70%', marginBottom: '100%'}}>Visit Website</a>
                  </div>
                </div>
              </div>

              {/* <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/musicc.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>SOFTWARE</h6>
                    <h1>MUSIC STREAMING APPLICATION</h1>
                    <h6>APPLICATION</h6>
                    <p>A Full Stack Streaming app built with React Js, Node Js, Mongo DB, GridFs</p>
                    <a href="https://github.com/teejohn247/Stream-Music">github repository here</a> 
                    <br /><br />
                    <a href="https://stream-app-1.herokuapp.com/" className="last" style={{width: '70%', marginBottom: '100%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}


              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/PM.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>SOFTWARE ENGINEERING</h6>
                    <h1>STREAMING API</h1>
                    <h6>API DEVELOPMENT</h6>
                    <p>This api was built with NodeJs,Express,Mongo DB and gridFS as database</p>
                    <a href="https://github.com/teejohn247/AudioStreamingEndpoints">github repository here</a> <br />
                    <br />
                    <a href="https://documenter.getpostman.com/view/7627645/TVmFkLZr" className="last" style={{width: '50%'}}>Api Documentation</a>
                  </div>
                </div>
              </div> */}

{/* 
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/dev.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>SOFTWARE</h6>
                    <h1>DEV CONNECTOR</h1>
                    <h6>APPLICATION</h6>
                    <p>This application was built with ReactJS for the frontend and NodeJs,Express and MongoDB for the backend.
                    </p>
                    <a href="https://github.com/teejohn247/dev-connector">github repository here</a> 
                    <br /><br />
                    <a href="https://immense-ocean-50012.herokuapp.com/" className="last" style={{width: '70%', marginBottom: '100%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/api.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>SOFTWARE ENGINEERING</h6>
                    <h1>ECOMMERCE API</h1>
                    <h6>API DEVELOPMENT</h6>
                    <p>This api was built with NodeJs,Express,Mocha and Chai(for testing),postgreSQL as the database and integrated with
                      Travis CI for continous integration </p>
                    <a href="https://github.com/teejohn247/Auto-Mart-Website">github repository here</a> <br />
                    <br />
                    <a href="https://automart-webapp.herokuapp.com/automart" className="last" style={{width: '50%'}}>Api Documentation</a>
                  </div>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/easy.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>EASYPROPERTY</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is an real estate listing website built with WordPress,PHP,HTML,CSS,JavaScript</p>
                    <a href="https://www.easypropertyng.com/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          {/* content goes here */}                
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/JD.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WordPress,PHP,HTML,CSS</h6>
                    <h1>JDRECYCLING</h1>
                    <h6>WEB DESIGN</h6>
                    <p>JD Recycling is an environment and human caring company that specializes in converting Vehicles’ Used TIRES to furniture, interior decor and playground items.
                      This site was built with WordPress,PHP,HTML,CSS</p>
                    {/* <a href="http://www.jdrecycling17.com/" className="last" style={{width: '50%'}}>Visit Website</a> */}
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          {/* content goes here */}                
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/water.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WordPress,PHP,HTML,CSS</h6>
                    <h1>INFINITY WATER</h1>
                    <h6>WEB DESIGN</h6>
                    <p>Infinity water is a mineral with 8.8ph level which is an exclusive luxury premium brand that will be filtered and purified 7 times as against the normal five times before bottled.
                      This site was built with WordPress,PHP,HTML,CSS</p>
                    <a href="http://www.infinitywater.com.ng/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/heydensite.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>HEYDEN PETROLEUM</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is a website built with  HTML,CSS,JavaScript</p>
                    <a href="https://teejohn247.github.io/Frontend/factory.w3itexperts.com/xhtml/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div> */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          {/* content goes here */}                
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/honey.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WordPress,PHP</h6>
                    <h1>HONEYTREAT LIMITED</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is a website built with WordPress,PHP</p>
                    <a href="http://www.honeytreatltd.com/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="row">
                   <div className="col-md-7 col-sm-12" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                                   
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/emi.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>EXCELLENT MINDS INITIATIVES</h1>
                    <h6>REGISTRATION PORTAL</h6>
                    <p>This is a portal built with  HTML,CSS,JavaScript and JQuery for the frontend while PHP and MySQL were used for the backend</p>
                    <a href="https://www.emi.org.ng/" className="last" style={{width: '50%'}}>Visit Portal</a>
                  </div>
                </div>
              </div>  */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/naomiabel.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>NAOMI ABEL DESIGNS</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is an e-commerce website built with WordPress,PHP</p>
                    <a href="http://www.naomiabeldesigns.com/" className="last" style={{width: '50%'}}>Visit Website</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-7" style={{marginTop: '10%'}}>
                    <div className="md-macbook-pro md-glare ">
                      <div className="md-lid">
                        <div className="md-camera " />
                        <div className="md-screen ">
                          {/* content goes here */}                
                          <div className="tab-featured-image ">
                            <div className="tab-content">
                              <div className="tab-pane  in active" id="tab1">
                                <img src="images/honeysite.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" style={{marginTop: '10%'}}>
                    <h6 className="wb" style={{marginTop: '20%'}}>WEB DESIGN</h6>
                    <h1>HONEYTREAT ACADEMY</h1>
                    <h6>DESIGN &amp; DEVELOPMENT</h6>
                    <p>This is a website built with WordPress,PHP</p>
                    {/* <a href="http://www.honeytreatacademy.com/" className="last" style={{width: '50%'}}>Visit Website</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{width: '200%'}}>
            <a className="carousel-control-prev text-dark" href="#myCarouse" role="button" data-slide="prev">
              <span className="fa fa-chevron-left text-white" aria-hidden="true" style={{width: '200%'}} />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next text-dark" href="#myCarouse" role="button" data-slide="next">
              <span className="fa fa-chevron-right text-white" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> 











  <section className="mh-experince image-bg featured-img-one" id="mh-experience">
    <div className="img-color-overlay">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <div className="mh-education">
              <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
              <div className="mh-education-deatils">
                {/* Education Institutes*/}
                <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <h4>Bootcamp Training In</h4> 
                  <h4>Software Engineering From <a href="https://www.andela.com/">Andela Nigeria</a></h4>
                  <div className="mh-eduyear">2019</div>
                </div> 
                <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <h4>Training</h4> 
                  <h4>In Software Engineering From<a href="https://www.andela.com/">Decagon Institute</a></h4>
                  <div className="mh-eduyear">2019</div>
                </div> 
                <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <h4>Professional certification in </h4> 
                  <h4>Website Development From <a href="https://www.hiitplc.com/">Hiit Plc</a></h4>
                  <div className="mh-eduyear">2019</div>
                </div> 
                <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <h4>Higher National Diploma</h4> 
                  <h4>Computer Engineering (Distinction) From <a href="https://federalpolyilaro.edu.ng/">The Federal Polytechnic,Ilaro</a></h4>
                  <div className="mh-eduyear">2015</div>
                </div>                                
                {/* Education Institutes*/}
                <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <h4>Ordinary National Diploma</h4> 
                  <h4>Computer Engineering From <a href="https://federalpolyilaro.edu.ng/">The Federal Polytechnic,Ilaro</a></h4>
                  <div className="mh-eduyear">2012</div>
                </div>                                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-work">
              <h3>Work Experience</h3>
              <div className="mh-experience-deatils">
                {/* Education Institutes*/}
                <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                  <h4>Software Engineer <a href="https://www.nahere.com/"> NaHere Limited</a></h4>
                  <div className="mh-eduyear">2020 - Present</div>
                  <span>Responsibility :</span>
                  <ul className="work-responsibility">
                    <li><i className="fa fa-circle" />Researching, designing, developin, implementing and managing software programs </li>
                    <li><i className="fa fa-circle" />Testing and evaluating new software programs</li>
                    <li><i className="fa fa-circle" />Deploying software tools, processes and metrics</li>
                  </ul>
                </div> 

                <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                  <h4>WordPress &amp; Php Developer at<a href="#"> 1024 Concepts</a></h4>
                  <div className="mh-eduyear">2021 - Present</div>
                  <span>Responsibility :</span>
                  <ul className="work-responsibility">
                    <li><i className="fa fa-circle" />Build Wordpress Applications</li>
                    {/* <li><i className="fa fa-circle" />Testing and evaluating new software programs</li> */}
                    <li><i className="fa fa-circle" />Deploying software tools, processes and metrics</li>
                  </ul>
                </div> 

                {/* Education Institutes*/}
                <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                  <h4>I.T Manager <a href="https://honeytreatltd.com/">Honeytreat Limited</a></h4>
                  <div className="mh-eduyear">2018</div>
                  <span>Responsibility :</span>
                  <ul className="work-responsibility">
                    <li><i className="fa fa-circle" />Manage Company's Website </li>
                    <li><i className="fa fa-circle" />Design graphics contents</li>
                    <li><i className="fa fa-circle" />Manage company's social media accounts</li>
                  </ul>
                </div>                                
                {/* Education Institutes*/}
                <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                  <h4>Front-End Developer <a href="https://www.afridigitals.com/">Afridigitals Limited</a></h4>
                  <div className="mh-eduyear">2018</div>
                  <span>Responsibility :</span>
                  <ul className="work-responsibility">
                    <li><i className="fa fa-circle" />Develop design concepts and control project flow.</li>
                    <li><i className="fa fa-circle" />Manage web projects with a team of developers.</li>
                  </ul>
                </div>                                
                {/* Education Institutes*/}
                <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                  <h4>WordPress Developer <a href="https://ultramediasolution.com/">Ultra Media Solutions</a></h4>
                  <div className="mh-eduyear">2017</div>
                  <span>Responsibility :</span>
                  <ul className="work-responsibility">
                    <li><i className="fa fa-circle" />Design websites,e-commerce platforms and blogs using wordpress CMS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
  {/*
  ===================
     PORTFOLIO
  ===================
  */}
  <section className="mh-portfolio" id="mh-portfolio">
    <div className="container">
      <div className="row section-separator">
        <div className="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
          <h3>Recent Portfolio</h3>
        </div>
        <div className="part col-sm-12">
          <div className="portfolio-nav col-sm-12" id="filter-button">
            <ul>
              <li data-filter="*" className="current wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s"> <span>All Categories</span></li>
              <li data-filter=".web" className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s"><span>Web Design</span></li>
              <li data-filter=".graphics" className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s"><span>Graphic Design</span></li>
            </ul>
          </div>
          
          <div className="mh-project-gallery col-sm-12 wow fadeInUp" id="project-gallery" data-wow-duration="0.8s" data-wow-delay="0.5s">
            <div className="portfolioContainer row">
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/femopesite.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a data-fancybox data-src="images/femopesite.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/lbb.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/lbb.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/package.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/package.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/label.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/label.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/flyer.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/flyer.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/cust.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/cust.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/heydensite.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a href="images/heydensite.jpg" data-fancybox data-src="images/heydensite.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/emi.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a href="images/emi.jpg" data-fancybox data-src="images/emi.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/dev.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a href="images/dev.jpg" data-fancybox data-src="images/dev.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/easy.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a href="images/easy.jpg" data-fancybox data-src="images/easy.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/honeysite.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a data-fancybox data-src="images/honeysite.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/naomisite.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a href="images/naomisite.jpg" data-fancybox data-src="images/naomisite.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 web">
                <figure>
                  <img src="images/honeytreat2.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Web Design</h5>
                    <a href="images/honeytreat2.jpg" data-fancybox data-src="images/honeytreat2.jpg" />
                  </figcaption>
                </figure>
              </div>
              
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/day1.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/day1.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/01.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/01.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/essay.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a data-fancybox data-src="images/essay.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/02.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/02.jpg" data-fancybox data-src="images/02.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/03.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/03.jpg" data-fancybox data-src="images/03.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/04.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/04.jpg" data-fancybox data-src="images/04.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/05.jpg" alt="img04" />                                       
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/05.jpg" data-fancybox data-src="images/05.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/06.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/06.jpg" data-fancybox data-src="images/06.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/07.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/07.jpg" data-fancybox data-src="images/07.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/08.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/08.jpg" data-fancybox data-src="images/08.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/09.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/09.jpg" data-fancybox="images/09.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/13.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/13.jpg" data-fancybox data-src="images/13.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/14.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/14.jpg" data-fancybox data-src="images/14.jpg" />
                  </figcaption>
                </figure>
              </div>
              <div className="grid-item col-md-4 col-sm-6 col-xs-12 graphics">
                <figure>
                  <img src="images/15.jpg" alt="img04" />
                  <figcaption className="fig-caption">
                    <i className="fa fa-search" />
                    <h5 className="title">Graphic Design</h5>
                    <a href="images/15.jpg" data-fancybox="images/15.jpg" />
                  </figcaption>
                </figure>
              </div>
            </div> {/* End: .grid .project-gallery */}
          </div> {/* End: .grid .project-gallery */}
        </div> {/* End: .part */}
      </div> {/* End: .row */}
    </div>
  </section>
  {/*
  ===================
     QUATES
  ===================
  */}
  <section className="mh-quates image-bg home-2-img">
    <div className="img-color-overlay">
      <div className="container">
        <div className="row section-separator">
          <div className="each-quates col-sm-12 col-md-6">
            <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Interested in Working with me?</h3>
            <a href="#footer" className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</Fragment>

    )
}

export default Dashboard;
