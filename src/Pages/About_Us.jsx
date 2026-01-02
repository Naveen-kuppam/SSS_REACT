import '../Style/About_Us.css'
import aboutImg from "../assets/watch-5.jpg";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <div><Navbar/></div>
      <div
        className="about-home"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <p className="about-subtitle">OUR STORY</p>
        <h1 className="about-heading">
          About <span>SSS</span>
        </h1>
      </div>
     
    
                <div className="bg-dark text-center py-5 border-top border-secondary border-opacity-25">
                  <div className="container">
                    <div className="row g-4">

                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="stat-box">
                          <i className="fa-regular fa-clock stat-icon"></i>
                          <h2 className="stat-number">10+</h2>
                          <p className="stat-text">Years of Excellence</p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="stat-box">
                          <i className="fa-solid fa-users stat-icon"></i>
                          <h2 className="stat-number">50K+</h2>
                          <p className="stat-text">Happy Customers</p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="stat-box">
                          <i className="fa-solid fa-award stat-icon"></i>
                          <h2 className="stat-number">100+</h2>
                          <p className="stat-text">Award Winning</p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="stat-box">
                          <i className="fa-solid fa-globe stat-icon"></i>
                          <h2 className="stat-number">50+</h2>
                          <p className="stat-text">Countries Served</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

      <div className="content-container">
        <h2 className="content-title">
          The Legacy of <span>SSS Watch Co</span>
        </h2>

        <p>
          SSS Watch Co has been a trusted name in watches for over a decade.
          Established more than 10 years ago, our shop began with a simple
          mission to provide quality timepieces and reliable service to every
          customer.
        </p>

        <p>
          Over the years, we have grown into a preferred destination for
          stylish watches, expert battery replacements, strap changes, and
          professional repairs. Our commitment to genuine products, fair
          pricing, and friendly customer service has helped us build
          long-lasting relationships with our customers.
        </p>

        <p>
          At SSS Watch Co, we believe every watch tells a story — and we are
          proud to be a part of yours.
        </p>
      </div>

                                   <div className="values-section py-5">
                            <div className="container text-center">
                              <h2 className="values-title mb-5">Our Values</h2>

                              <div className="row g-4">
                                
                              
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="value-card h-100 p-4">
                                    <h4>Craftsmanship</h4>
                                    <p>
                                      Every timepiece is crafted with meticulous attention to detail,
                                      ensuring the highest quality standards.
                                    </p>
                                  </div>
                                </div>

                                
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="value-card h-100 p-4">
                                    <h4>Heritage</h4>
                                    <p>
                                      We honor the rich tradition of watchmaking while embracing
                                      modern innovation and design.
                                    </p>
                                  </div>
                                </div>

                               
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="value-card h-100 p-4">
                                    <h4>Excellence</h4>
                                    <p>
                                      Our commitment to excellence drives us to deliver only the
                                      finest luxury timepieces.
                                    </p>
                                  </div>
                                </div>

                              
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className="value-card h-100 p-4">
                                    <h4>Trust</h4>
                                    <p>
                                      Building lasting relationships with our customers through
                                      transparency and integrity.
                                    </p>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div>
                            <ContactSection/>
                            <FooterSection/>
                          </div>
      
    </>
  );
}

export default About;
