import React from 'react';
import './Product_card.css';
import Button2 from '../Buttons/Button2';

function Product_card() {
    return (
        <div className='product-outer-container'>
            <div className="product-container">
                <img src="./assets/img-article.svg" alt="" className="product-image" />
                <div className="product-info">
                    <span className='product-title'>Product Name</span>
                    <div className="product-price">
                        <span>MRP:</span>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button2 text={'Add to Cart'} bgColor={'rgb(255, 0, 0)'} bgColorhover={'rgb(209, 2, 2)'} textColor={'#FFF7E2'} />
                <Button2 text={'Add to Cart'} bgColor={'#3A633C'} bgColorhover={'#264228'} textColor={'#FFF7E2'} />
            </div>
        </div>
    )
}

export default Product_card