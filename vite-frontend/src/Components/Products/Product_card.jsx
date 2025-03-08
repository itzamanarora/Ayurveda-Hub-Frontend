import { Star, ShoppingCart, Heart } from "lucide-react";
import "./Product_Card.css";
import Button3 from "../Buttons/Button3";
import Card_3 from '../../Components/Card/Card_3';

const Product_Card = () => {
    return (
        <div className="product-card">
            {/* Product Image */}
            <img
                src="./assets/gif-error1.gif"
                alt="Product"
                className="product-image"
            />

            {/* Product Details */}
            <div className="product-details">
                <h2 className="product-title">Product Title</h2>

                {/* Price Section */}
                <p className="product-price">
                    MRP: <span className="original-price">Rs.1150</span>
                    <span className="discounted-price">Rs.1035</span>
                    <span className="discount">10% OFF</span>
                </p>

                {/* Rating Section */}
                <div className="rating">
                    {[...Array(4)].map((_, i) => (
                        <Star key={i} className="star filled" />
                    ))}
                    <Star className="star empty" />
                    <span className="reviews">(1,235)</span>
                </div>
            </div>

            {/* Actions */}
            <div className="product-actions">
                <div className="wishlist-action">
                    <Button3 />
                </div>
                <button className="add-to-cart">
                    <ShoppingCart className="icon" /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product_Card;
