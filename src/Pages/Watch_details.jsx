import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../Style/Watch_details.css";
import axios from "axios";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";


function WatchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [watch, setWatch] = useState(null);
  const [cart, setCart] = useState([]);
  const [watches, setWatches] = useState([]); // all watches for collection
  const [showAddress, setShowAddress] = useState(false);

  const [address, setAddress] = useState({
    house: "",
    area: "",
    district: "",
    state: "",
    pincode: "",
  });

  /* ================= FETCH WATCH ================= */
  useEffect(() => {
    axios
      .get("http://localhost:4000/Watches")
      .then((res) => {
        const found = res.data.find((w) => String(w.id) === String(id));
        setWatch(found);
        setWatches(res.data); // save all watches for collection
      })
      .catch((err) => console.error(err));
  }, [id]);

  /* ================= LOAD CART ================= */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  /* ================= CART HELPERS ================= */
  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increment = (id) => {
    updateCart(
      cart.map((i) => (i.id === id ? { ...i, qty: (i.qty || 1) + 1 } : i))
    );
  };

  const decrement = (id) => {
    updateCart(
      cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const addToCart = (item = watch) => {
    const exists = cart.find((i) => i.id === item.id);
    if (exists) increment(item.id);
    else updateCart([...cart, { ...item, qty: 1 }]);
    navigate("/Cart");
  };

  /* ================= ADDRESS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  if (watch === null)
    return <p className="text-center mt-5 text-white">Loading...</p>;

  if (!watch)
    return <p className="text-center mt-5 text-danger">Watch not found</p>;

  const currentQty = cart.find((i) => i.id === watch.id)?.qty || 1;

  const whatsappMessage = `Hello, I want to buy this watch
Name: ${watch.name}
Watch ID: ${watch.id}
Quantity: ${currentQty}
Total Price: ₹${watch.price * currentQty}

Delivery Address:
House: ${address.house}
Area: ${address.area}
District: ${address.district}
State: ${address.state}
Pincode: ${address.pincode}`;

  const whatsappLink = `https://wa.me/9392655416?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      {/* WATCH DETAILS */}
      <div className="container watch-details text-white">
        <div className="row g-4">
          {/* IMAGE */}
          <div className="col-md-6">
            <div className="image-box mb-3">
              <img src={watch.image} alt={watch.name} className="img-fluid rounded" />
            </div>

            <div className="d-flex gap-2">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  src={watch.image}
                  alt=""
                  className="img-thumbnail"
                  style={{ width: "50px", cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="col-md-6">
            <span className="badge bg-warning text-dark mb-2">NEW ARRIVAL</span>
            <h2 className="product-title">{watch.name}</h2>
            <h3 className="text-secondary">{watch.brand} for {watch.gender}</h3>
            <h4>₹{watch.price}    </h4>
            <h5 className="text-secondary text-decoration-line-through">{watch.oldPrice}</h5>

            {/* QTY */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => decrement(watch.id)}
                disabled={currentQty === 1}
              >
                -
              </button>
              <span>{currentQty}</span>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => increment(watch.id)}
              >
                +
              </button>
            </div>

            <h5><span className="text-secondary">Subtotal: </span>₹{watch.price * currentQty}</h5>

            {/* ACTIONS */}
            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-dark" onClick={() => addToCart(watch)}>
                Add to Cart
              </button>
              {!showAddress && (
                <button className="btn buy-now" onClick={() => setShowAddress(true)}>
                  Buy Now via WhatsApp
                </button>
              )}
            </div>

            {/* ADDRESS FORM */}
            {showAddress && (
              <div className="address-form p-3 bg-dark rounded mb-3">
                {Object.keys(address).map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.toUpperCase()}
                    className="form-control mb-2 bg-dark text-white"
                    onChange={handleChange}
                  />
                ))}
                <div className="d-flex gap-2">
                  <button className="btn btn-secondary w-50" onClick={() => setShowAddress(false)}>
                    Back
                  </button>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-50">
                    <button className="btn btn-success w-100">Send Order</button>
                  </a>
                </div>
              </div>
            )}

            <div className="row row-cols-2 g-2 mt-3 text-white">
              <div className="col">✔ 6 Months Warranty</div>
              <div className="col">✔ 7 Days Return</div>
              <div className="col">✔ Free Shipping</div>
              <div className="col">✔ Pay on Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR COLLECTION */}
      <div>
        <p className="collection-title text-warning">OUR COLLECTION</p>
        <div className="container">
          <div className="row text-center mt-4">
            {watches.map((w) => (
              <div className="col-md-3 mb-4" key={w.id}>
                <div className="card watch-card">
                  <div className="watch-image">
                    <Link to={`/watch/${w.id}`}>
                      <img src={w.image} className="card-img-top" alt={w.name} />
                    </Link>
                    <button className="button-2" onClick={() => addToCart(w)}>
                      <i className="bi bi-bag"></i> Add to Cart
                    </button>
                  </div>
                  <div className="card-body watch-content mt-2">
                    <h6>{w.category}</h6>
                    <h5>{w.name}</h5>
                    <p>₹ {w.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default WatchDetails;
