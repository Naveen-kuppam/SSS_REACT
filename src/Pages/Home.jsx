import Navbar from '../components/Navbar';
import Watch_details from '../Pages/Watch_details'
import "../Style/Cart.css";
import ContactSection from '../components/ContactSection';
import { Link } from "react-router-dom";
import { useState  } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../Style/Home.css'
import FooterSection from '../components/FooterSection';
function Home() {
    const navigate = useNavigate();

/* ================= ADD TO CART (USER BASED) ================= */
  const addToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    const cartKey = `cart_${user.id}`;
    const existingCart =
      JSON.parse(localStorage.getItem(cartKey)) || [];

    const itemIndex = existingCart.findIndex(
      (i) => i.id === item.id
    );

    if (itemIndex !== -1) {
      existingCart[itemIndex].qty =
        (existingCart[itemIndex].qty || 1) + 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    
  };

  const handleAddToCart = (watch) => {
    addToCart(watch);
    navigate("/Cart");
  };

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/watches/")
      .then((res) => setWatches(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
    return ( 
        <div>
              <Navbar/>
              
    {/*--------------------------------- Home------------------------------ */}
                            <div className="home">
                            <div className="home-content text-center">
                                <h1 className="home-title">SSS   WATCHES </h1>
                                <h1 className='text-center text-light home-title2'>SALES & SERVICES</h1>
                                <p className="home-subtitle">
                                Where masterful craftsmanship meets unparalleled sophistication.
                                Each timepiece tells a story of excellence.
                                </p>
                                <a href="/shop/"><button className="btn call-button text-dark mt-4" >
                                Explore Collection
                                </button></a>
                            </div>
                            </div>

        
        {/*------------------------------- Collections---------------------------------- */}
                <div id='Collection'>
                   <p className="collection-title text-warning">OUR COLLECTION</p>
                <h1 className="collection-heading text-center text-light ">Exceptional Timepieces</h1>

                <div className="container">
                    <div className="row text-center ">

                    {watches.map((watch) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={watch.id}>
                        <div className="watch-card">

                        
                            <div className="watch-image">
                            <Link to={`/watch/${watch.id}`}>
                                <img  src={`http://127.0.0.1:8000${watch.image}`} alt={watch.name} />
                            </Link>

                        <button className="button-2"onClick={() => handleAddToCart(watch)}>
                                <i className="bi bi-bag"></i> Add to Cart</button>

                </div>

               
                <div className="watch-content">
                  <h6 className="collection">{watch.category}</h6>
                  <h5 className="name">{watch.name}</h5>

                  <div className="price-row text-center ">
                    <span className="price ">₹ {watch.price}</span>
                    <span className="old-price text-end">₹ {watch.oldPrice}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
                </div>
                            
    {/* -------------------------------------Featues--------------------------------------- */}
                        <div>
            <div class="container bg-dark py-5 mt-5">
            <div class="row text-center justify-content-center">

                <div class="col-md-3 mb-4">
                <div class="feature-box">
                    <div class="icon-circle mx-auto">
                    <i class="bi bi-award"></i>
                    </div>
                    <h4 class="mt-3 text-white">Authentic Luxury</h4>
                    <p class="text-secondary">
                    Every timepiece  with full documentation.
                    </p>
                </div>
                </div>

                <div class="col-md-3 mb-4">
                <div class="feature-box">
                    <div class="icon-circle mx-auto">
                    <i class="bi bi-shield-check"></i>
                    </div>
                    <h4 class="mt-3 text-white">2-Year Warranty</h4>
                    <p class="text-secondary">
                    Comprehensive coverage for your peace of mind.
                    </p>
                </div>
                </div>

                <div class="col-md-3 mb-4">
                <div class="feature-box">
                    <div class="icon-circle mx-auto">
                     <i class="fa-solid fa-truck-fast"></i>
                                        </div>
                    <h4 class="mt-3 text-white">Free Shipping</h4>
                    <p class="text-secondary">
                    Complimentary worldwide delivery on all orders.
                    </p>
                </div>
                </div>

                <div class="col-md-3 mb-4">
                <div class="feature-box">
                    <div class="icon-circle mx-auto">
                    <i class="bi bi-clock"></i>
                    </div>
                    <h4 class="mt-3 text-white">Expert Service</h4>
                    <p class="text-secondary">
                    Professional maintenance by certified watchmakers.
                    </p>
                </div>
                 </div>
                 </div>
                </div>

             
                        <ContactSection/>
                        <FooterSection/>

   

                
                        
        </div>
        </div>
        </div>
        
     );
}

export default Home;