import React from 'react';

const MobileCard = ({mobile}) => {
    const {productName, productImage, rating, price} = mobile;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-full">
                <figure className="px-10 pt-10">
                    <img
                        src={productImage}
                        alt="image"
                        className="rounded-xl w-42 h-56 object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>$ {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileCard;