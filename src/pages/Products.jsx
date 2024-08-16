import React, { useEffect, useState } from 'react';
import MobileCard from './MobileCard';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Products = () => {
    const [data, setData] = useState([]);
    const [productPerPage, setProductPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const [asc, setAsc] = useState(true); // Sorting state

    const { count } = useLoaderData();
    
    // Pagination logic
    const numberOfPages = Math.ceil(count / productPerPage);
    const pages = [...Array(numberOfPages).keys()];
   
    useEffect(() => {
        fetch(`http://localhost:5000/mobiles?page=${currentPage}&size=${productPerPage}&sort=${asc ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }, [currentPage, productPerPage, asc]);

    // Handle Product per page:
    const handleProductPerPage = (e) => {
        const val = parseInt(e.target.value);
        setProductPerPage(val);
        setCurrentPage(0);
    }

    // Handle Prev page:
    const handlePrevPage = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }

    // Handle Next page:
    const handleNextPage = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>ShopEase | Products</title>
                </Helmet>
            </div>

            {/* Price Sorting */}
            <div className='flex justify-center'>
                <button onClick={() => setAsc(!asc)}
                    className='btn btn-secondary text-lg font-bold'>
                    {asc ? 'PRICE: HIGH TO LOW' : 'PRICE: LOW TO HIGH'}
                </button>
            </div>

            <div className='grid grid-cols-4 gap-6'>
                {
                    data?.map(mobile => <MobileCard key={mobile._id} mobile={mobile}></MobileCard>)
                }
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-12 mb-12'>
                <button onClick={handlePrevPage} className='btn bg-orange-500'>Prev</button>
                {
                    pages.map((page, index) => <button 
                        onClick={() => setCurrentPage(page)}
                        className={`btn mr-2 rounded-md font-bold ${
                            currentPage === page ? 'bg-sky-400 text-white font-bold' : 'bg-gray-300'
                          }`}
                         key={page}
                         >
                         {index + 1}
                         </button>)
                }
                <button onClick={handleNextPage} className='btn bg-orange-500'>Next</button>
                <select value={productPerPage} onChange={handleProductPerPage}>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="40">40</option>
                </select>
            </div>
        </div>
    );
};

export default Products;
