import React, { useEffect, useState } from 'react';
import MobileCard from './MobileCard';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaSearch } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

const Products = () => {
    const [data, setData] = useState([]);
    const [productPerPage, setProductPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    // Sorting state
    const [asc, setAsc] = useState(true); 

    //Search state
    const [search, setSearch] = useState('')

    const { count } = useLoaderData();
    
    // Pagination logic
    const numberOfPages = Math.ceil(count / productPerPage);
    const pages = [...Array(numberOfPages).keys()];
   
    useEffect(() => {
        fetch(`http://localhost:5000/mobiles?page=${currentPage}&size=${productPerPage}&sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }, [currentPage, productPerPage, asc, search]);

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

    //Handle Search:
    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.search.value;
        setSearch(searchText)
        
    }
    
    return (
        <div>
            <div>
                <Helmet>
                    <title>ShopEase | Products</title>
                </Helmet>
            </div>
            {/*All Functionality div*/}

            <div className='flex justify-between'>
                       {/*Searching Product*/}
            <div className='relative'>
                <form onSubmit={handleSearch}>
                    <input className='p-2 px-12 w-96 border-2 border-gray-100 rounded-lg' placeholder='Search Product' type="text" name='search' />
                    <IoSearchOutline className='absolute top-3 ml-4 text-2xl' />
                    <input type="submit" value="Search" className='btn bg-orange-500'/>
                </form>
            </div>

            {/* Price Sorting */}
            <div className='flex justify-center'>
                <button onClick={() => setAsc(!asc)}
                    className='px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800 hover:bg-[orange] bg-orange-100 duration-1000 ease-in-out hover:text-black border-none'>
                    {asc ? 'PRICE: HIGH TO LOW' : 'PRICE: LOW TO HIGH'}
                </button>
            </div>


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























