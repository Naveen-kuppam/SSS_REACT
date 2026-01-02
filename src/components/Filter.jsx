import { useEffect } from "react";
function Filters({ filters = {}, setFilters }) {
  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const current = prev[type] || [];
      const exists = current.includes(value);

      return {
        ...prev,
        [type]: exists
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="filter-sidebar">
      <details open>
        <summary>Display Type</summary>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("category", "Analog")}
          />{" "}
          Analog
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("category", "Digital")}
          />{" "}
          Digital
        </label>
      </details>

      
      <details>
        <summary>Gender</summary>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("gender", "Men")}
          />{" "}
          Men
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("gender", "Women")}
          />{" "}
          Women
        </label>
      
      </details>

      <details>
        <summary>Strap Material</summary>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("strap", "Leather")}
          />{" "}
          Leather
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("strap", "Silicone")}
          />{" "}
          Silicone
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckbox("strap", "Metal")}
          />{" "}
          Metal
        </label>
      </details>

      
      <details>
        <summary>Price</summary>
        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={filters.price ?? 10000}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: Number(e.target.value),
            }))
          }
        />
        <p>Up to ₹{filters.price ?? 10000}</p>
      </details>
    </div>
  );
}

export default Filters;
