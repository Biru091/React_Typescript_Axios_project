import { useEffect, useState } from "react";
import { Getdata } from "../api/axios";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = await Getdata();
            setProducts(result.products);
        }

        fetchData();
    }, []);

    return (
        <div className="hero-section">
            {products.map((item) => (
                <div className="products" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />

                    <div className="content">
                        <h2>{item.title}</h2>
                        <hr />

                        <div className="bottom">
                            <button className="price">${item.price}</button>
                            <Link to={`/product/${item.id}`}>
                                <button>More Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}