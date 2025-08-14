import { useEffect, useState } from "react";
import "./pagination.css";
import { PRODUCT_SIZE } from "./constant";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const total_products = products.length;
  const total_pages = Math.ceil(total_products / PRODUCT_SIZE);
  const start = currentPage * PRODUCT_SIZE;
  const end = start + PRODUCT_SIZE;

  async function fetchData() {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    setProducts(json.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handlePageChange(n) {
    setCurrentPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleLeftClick() {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  }

  function handleRightClick() {
    if (currentPage < total_pages - 1) setCurrentPage((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Pagination</h2>
      <div className="pagination">
        <button
          className={`pagi-num ${currentPage === 0 ? "disabled" : ""}`}
          onClick={handleLeftClick}
        >
          ◀
        </button>
        {[...Array(total_pages).keys()].map((num) => (
          <span
            key={num}
            className={"pagi-num " + (currentPage === num ? "active" : "")}
            onClick={() => handlePageChange(num)}
          >
            {num + 1}
          </span>
        ))}
        <button
          className={`pagi-num ${currentPage === total_pages - 1 ? "disabled" : ""}`}
          onClick={handleRightClick}
        >
          ▶
        </button>
      </div>
      <div className="product-container">
        {products.slice(start, end).map((prod) => (
          <ProductCard
            key={prod.id}
            image={prod.images[0]}
            title={prod.title}
            description={prod.description}
            price={prod.price}
            brand={prod.brand}
          />
        ))}
      </div>
    </div>
  );
};

export const ProductCard = ({ image, title, price, brand }) => {
  return (
    <div className="product-card">
      <p>{brand}</p>
      <img src={image} alt={title} className="product-img" />
      <p>{title}</p>
      {/* <p>
        {description && description.length > 60
          ? description.substring(0, 60) + "..."
          : description}
      </p> */}
      <p>{price} $</p>
    </div>
  );
};
