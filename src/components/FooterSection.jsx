import '../Style/FooterSection.css'
import logo from '../assets/ss.jpg';

function FooterSection() {
    return ( 

    <>
      <div className="bg-black text-light pt-5 pb-4">
        <div className="container">
          <div className="row gy-4">
           
            <div className="col-lg-4 col-md-6">
               <img src={logo} alt="SSS Logo" className="logo-img" /><br/>
              <small className="text-secondary">SHRI SAI SHIVA</small>
              <p className="mt-3 text-secondary">
                Curating the world's finest timepieces since 2010.
              </p>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5>Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="/" className='text-decoration-none'>Home</a></li>
                <li><a href="/shop/"className='text-decoration-none '>Shop</a></li>
                <li><a href="/about/" className='text-decoration-none '>About</a></li>
                <li><a href="/about/" className='text-decoration-none '>Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Support</h5>
              <ul className="list-unstyled footer-links">
                <li>FAQs</li>
                <li>Returns</li>
                <li>Shipping</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Contact</h5>
               <ul className="list-unstyled footer-links">
              <li className="text-secondary">+1 (555) 123-4567</li>
              <li className="text-secondary">hello@sss-watches.com</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <p className="text-center text-secondary mb-0 py-3">
        © 2025 SSS – Shri Sai Shiva
      </p>
    </>
  );
}





export default FooterSection;