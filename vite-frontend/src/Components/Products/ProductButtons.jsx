import React from 'react'
import {ShoppingCart} from "lucide-react";
import './Product_card.css'
import Button3 from "../Buttons/Button3";

function ProductButtons() {
    return (
        <div className="product-actions">
            <div className="wishlist-action">
                <Button3 />
            </div>
            <button className="add-to-cart">
                <ShoppingCart className="icon" /> Add to Cart
            </button>
        </div>
    )
}

export default ProductButtons