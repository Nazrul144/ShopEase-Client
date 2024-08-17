import React from 'react';
import { Link } from 'react-router-dom';

const MobileCard = ({mobile}) => {
    const {productName, productImage, price, _id} = mobile;
   
    return (
        <div>
            <div className="card bg-purple-200 shadow-xl h-full animate__animated animate__zoomIn">
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
                        <Link to={`/viewDetails/${_id}`}>
                        <button className=' btn btn-outline border-0 border-b-4 mb-4 bg-sky-400 hover:bg-[orange] duration-1000 ease-in-out hover:text-black'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileCard;