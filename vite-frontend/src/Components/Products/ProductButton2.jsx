import {ShoppingCart} from "lucide-react";
import './Product_card.css'

function ProductButtons() {
    return (
        <div className="product-actions">
            <button className="add-to-cart">
                <ShoppingCart className="icon" /> Download
            </button>
        </div>
    )
}

export default ProductButtons