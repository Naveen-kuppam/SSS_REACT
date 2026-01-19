import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import aboutImg from "../assets/watch-5.jpg";
import axios from "axios";
import "../Style/Collections.css";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";

const API_URL = "http://localhost:4000/Watches";

function Collections() {
  const navigate = useNavigate();

  /* ================= STATES ================= */
  const [watches, setWatches] = useState([]);
  const [searchedWatches, setSearchedWatches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    category: [],
    gender: [],
    strap: [],
    price: 200000,
  });

  /* ================= FETCH WATCHES ================= */
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setWatches(res.data);
        setSearchedWatches(res.data);
      })
      .catch((err) =>
        console.error("Error fetching watches:", err)
      );
  }, []);

  /* ================= ADD TO CART ================= */
  const addToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    const cartKey = `cart_${user.id}`;
    const cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];

    const index = cart.findIndex(
      (i) => i.id === item.id
    );

    if (index !== -1) {
      cart[index].qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    navigate("/Cart");
  };

  /* ================= SEARCH ================= */
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchedWatches(watches);
      return;
    }

    const results = watches.filter((watch) =>
      watch.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    setSearchedWatches(results);
  };

  /* ================= FILTER ================= */
  const filteredWatches = searchedWatches.filter(
    (watch) => {
      if (
        filters.category.length &&
        !filters.category.includes(watch.category)
      )
        return false;

      if (
        filters.gender.length &&
        !filters.gender.includes(watch.gender)
      )
        return false;

      if (
        filters.strap.length &&
        !filters.strap.includes(watch.strap)
      )
        return false;

      if (watch.price > filters.price) return false;

      return true;
    }
  );

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div
        className="Shop-home"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <h1 className="Shop-heading">
          Our <span className="Shop-span">Collection</span>
        </h1>
      </div>

      <div className="container mt-4">

        {/* SEARCH + FILTER */}
        <div className="search-filter-wrapper">
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search watches..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && handleSearch()
              }
            />
            <button
              className="btn btn-warning search-btn"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>

          <button
            className="btn btn-dark filter-toggle-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            <i className="bi bi-funnel"></i> Filter
          </button>
        </div>

        {showFilter && (
          <div className="filter-box">
            <Filter
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        )}

        {/* PRODUCTS */}
        <div className="row text-center mt-4">
          {filteredWatches.map((watch) => (
            <div
              className="col-md-3 mb-4"
              key={watch.id}
            >
              <div className="card watch-card">
                <div className="watch-image">
                  <Link to={`/watch/${watch.id}`}>
                    <img
                      src={watch.image}
                      className="card-img-top"
                      alt={watch.name}
                    />
                  </Link>

                  <button
                    className="button-2"
                    onClick={() => addToCart(watch)}
                  >
                    <i className="bi bi-bag"></i> Add to Cart
                  </button>
                </div>

                <div className="card-body watch-content mt-2">
                  <h6>{watch.category}</h6>
                  <h5>{watch.name}</h5>
                  <p>₹ {watch.price}</p>
                </div>
              </div>
            </div>
          ))}

          {filteredWatches.length === 0 && (
            <h4>No products found</h4>
          )}
        </div>
      </div>
      <ContactSection />
      <FooterSection />
    </div>
    
    
  );
}

export default Collections;
