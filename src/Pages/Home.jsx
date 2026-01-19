import Navbar from "../components/Navbar";
import "../Style/Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/Home.css";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";



function Home() {
  const navigate = useNavigate();
  const [watches, setWatches] = useState([]);

  /* ---------------- FETCH WATCHES ---------------- */
  useEffect(() => {
    axios
      .get("http://localhost:4000/Watches")
      .then((res) => {
        // handle both array and object response
        setWatches(res.data.watches || res.data);
      })
      .catch((err) => {
        console.error("Error fetching watches:", err);
      });
  }, []);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    const cartKey = `cart_${user.id}`;
    const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const itemIndex = existingCart.findIndex((i) => i.id === item.id);

    if (itemIndex !== -1) {
      existingCart[itemIndex].qty += 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    navigate("/Cart");
  };

  return (
    <div>
      <Navbar />

      {/* ---------------- Home Section ---------------- */}
      <div className="home">
        <div className="home-content text-center">
          <h1 className="home-title">SSS WATCHES</h1>
          <h1 className="text-light home-title2">SALES & SERVICES</h1>
          <p className="home-subtitle">
            Beautifully made watches with a classic look. Built to last.
          </p>
          <Link to="/shop">
            <button className="btn call-button text-dark mt-4">
              Explore Collection
            </button>
          </Link>
        </div>
      </div>

      {/* ---------------- Collections ---------------- */}
      <div id="Collection">
        <p className="collection-title text-warning">OUR COLLECTION</p>
        <h1 className="collection-heading text-center text-light">
          Exceptional Timepieces
        </h1>

        <div className="container">
          <div className="row text-center">
            {Array.isArray(watches) &&
              watches.map((watch) => (
                <div className="col-lg-3 col-md-6 mb-4" key={watch.id}>
                  <div className="watch-card">
                    <div className="watch-image">
                      <Link to={`/watch/${watch.id}`}>
                        <img src={watch.image} alt={watch.name} />
                      </Link>

                      <button
                        className="button-2"
                        onClick={() => addToCart(watch)}
                      >
                        <i className="bi bi-bag"></i> Add to Cart
                      </button>
                    </div>

                    <div className="watch-content">
                      <h6 className="collection">{watch.category}</h6>
                      <h5 className="name">{watch.name}</h5>

                      <div className="price-row">
                        <span className="price">₹ {watch.price}</span>
                        <span className="old-price">
                          ₹ {watch.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;
