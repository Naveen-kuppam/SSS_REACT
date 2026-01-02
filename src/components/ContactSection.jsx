import '../Style/ContactSection.css'
function ContactSection() {
    return ( 
          <div class="container py-5">
                    <div class="row g-4 align-items-stretch">

                    
                        <div class="col-lg-6">
                        <div class="contact-box h-100 p-4">
                            <h3 class="mb-4 text-warning">Contact Us</h3>
                             <ul className="list-unstyled">
                             <li  className='text-secondary'>
                            <i class="bi bi-geo-alt text-warning "></i>
                             Nizampet,Bachupally.
                            </li>  

                            <li className='text-secondary'>
                            <i class="bi bi-telephone text-warning "></i>
                            +1 (555) 123-4567 
                            </li>                 
                             <li className='text-secondary'>
                             <i class="bi bi-envelope text-warning "></i>
                                 hello@sss-watches.com 
                            </li>
                            </ul>

                            <hr class="border-secondary"/>

                            <form>
                            <div class="mb-3">
                                <input type="text" class="form-control bg-dark text-light border-secondary"
                                placeholder="Your Name"/>
                            </div>

                            <div class="mb-3">
                                <input type="email" class="form-control bg-dark text-light border-secondary"
                                placeholder="Your Email"/>
                            </div>

                            <div class="mb-3">
                                <textarea rows="4" class="form-control bg-dark text-light border-secondary"
                                placeholder="Message"></textarea>
                            </div>

                            <button class="btn btn-warning px-4">Send Message</button>
                            </form>
                        </div>
                        </div>

                    {/*------------------------Map-------------------------------------- */}
                         <div class="col-lg-6">
                         <div class="map-box h-100">
 
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30432.95582113548!2d78.37284489999999!3d17.549497400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766241437357!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe> 
                        </div> 
                        </div>
                        </div>
                        </div>
                    
     );
}

export default ContactSection;