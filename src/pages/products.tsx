import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleProduct } from "../api/axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await GetSingleProduct(id!);
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="image-section">
          <img src={product.images[0]} alt={product.title} />
        </div>

        <div className="info-section">
          <span className="category">{product.category}</span>

          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <div className="price-box">
            <h2>${product.price}</h2>
            <span>-{product.discountPercentage}% OFF</span>
          </div>

          <div className="info-grid">
            <div>
              <strong>Brand</strong>
              <p>{product.brand}</p>
            </div>

            <div>
              <strong>Rating</strong>
              <p>⭐ {product.rating}</p>
            </div>

            <div>
              <strong>Stock</strong>
              <p>{product.stock}</p>
            </div>
          </div>

          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}