import React from "react";
import Item from "./Item";

export default function Home() {
  return (
    <>
      <div className="container my-4">
        <h2>Products</h2>
        <div className="row">
          {Item.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    ${product.price}
                  </h6>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <small>
                      Category: {product.category} | Rating: {product.rating}⭐
                      |{" "}
                      <span
                        className={` ${!product.stock ? "text-danger" : ""}`}
                      >
                        Stock: {product.stock ? "Available" : "Out of Stock"}
                      </span>
                    </small>
                  </p>
                  <button
                    className="btn btn-primary"
                    disabled={!product.stock}
                    onClick={() => alert(`Added ${product.name} to cart!`)}
                  >
                    {product.stock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
