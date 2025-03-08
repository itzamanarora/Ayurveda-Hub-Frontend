import "./Loading_ProductCard.css";

const ProductCardSkeleton = () => {
    return (
        <div className="product-card skeleton">
            <div className="skeleton-image"></div>
            <div className="product-details">
                <div className="skeleton-text skeleton-title"></div>
                <div className="skeleton-text skeleton-title"></div>
                <div className="skeleton-text skeleton-price"></div>
                <div className="skeleton-rating">
                    <div className="skeleton-star"></div>
                    <div className="skeleton-star"></div>
                    <div className="skeleton-star"></div>
                    <div className="skeleton-star"></div>
                    <div className="skeleton-star"></div>
                    <div className="skeleton-text skeleton-reviews"></div>
                </div>
            </div>
            <div className="product-actions">
                <div className="skeleton-button wishlist-action"></div>
                <div className="skeleton-button add-to-cart"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;