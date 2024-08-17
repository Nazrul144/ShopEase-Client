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

    // States for new filters
    const [category, setCategory] = useState(''); // Category filter
    const [minPrice, setMinPrice] = useState(''); // Minimum price filter
    const [maxPrice, setMaxPrice] = useState(''); // Maximum price filter

    console.log(category);

    // fetch(`http://localhost:5000/mobiles?page=${currentPage}&size=${productPerPage}&sort=${asc ? 'asc' : 'desc'}&search=${search}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`)



    const { count } = useLoaderData();
    // Pagination logic
    const numberOfPages = Math.ceil(count / productPerPage);
    const pages = [...Array(numberOfPages).keys()];
   
    useEffect(() => {
        fetch(`http://localhost:5000/mobiles?page=${currentPage}&size=${productPerPage}&sort=${asc ? 'asc' : 'desc'}&search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }, [currentPage, productPerPage, asc, search, category, minPrice, maxPrice]);

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

    // Handle brand filter change
    const handleBrandChange = (e) => {
        setCategory(e.target.value);
    }

    //Handle Price Range:
     // Handle minimum price filter change
     const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    }

    // Handle maximum price filter change
    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    }
    
    return (
        <div>
            <div>
                <Helmet>
                    <title>ShopEase | Products</title>
                </Helmet>
            </div>
            {/*All Functionality div*/}

            <div className='lg:flex justify-around mt-12 mb-24'>
            {/*Searching Product*/}
            <div className='relative'>
                <form onSubmit={handleSearch}>
                    <input className='p-2 px-12 lg:w-96 border-2 border-gray-100 rounded-lg' placeholder='Search Product' type="text" name='search' />
                    <IoSearchOutline className='absolute top-3 ml-4 text-2xl' />
                    <input type="submit" value="Search" className='btn bg-orange-500'/>
                </form>
            </div>

            {/*Filtering by category*/}

            <select  value={category} onChange={handleBrandChange} className='p-2 px-4 font-bold border-2 bg-purple-400 border-gray-100 rounded-lg'>
                        <option value="">Select Brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Redmi">Redmi</option>
                       
            </select>
        
             {/* Filtering by price range */}
             <div className='relative mt-4 lg:mt-0'>
                    <input
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        placeholder="Min Price"
                        className='p-2 px-4 border-2 border-gray-100 rounded-lg'
                    />
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        placeholder="Max Price"
                        className='p-2 px-4 border-2 border-gray-100 rounded-lg'
                    />
                </div>
                
           

            {/* Price Sorting */}
            <div className='lg:flex justify-center mt-4 lg:mt-0'>
                <button onClick={() => setAsc(!asc)}
                    className='px-8 py-3 text-lg font-semibold border rounded bg-sky-400 dark:border-gray-800 hover:bg-[orange duration-1000 ease-in-out hover:text-black border-none'>
                    {asc ? 'PRICE: HIGH TO LOW' : 'PRICE: LOW TO HIGH'}
                </button>
            </div>


            </div>
     
            <div className='grid lg:grid-cols-4 gap-6'>
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























