import React, { useEffect, useState } from 'react';
import MobileCard from './MobileCard';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
    const [brand, setBrand] = useState('');       // Brand filter
    const [minPrice, setMinPrice] = useState(''); // Minimum price filter
    const [maxPrice, setMaxPrice] = useState(''); // Maximum price filter




    const { count } = useLoaderData();
    // Pagination logic
    const numberOfPages = Math.ceil(count / productPerPage);
    const pages = [...Array(numberOfPages).keys()];
   
    useEffect(() => {
        fetch(`https://shop-ease-server-mu.vercel.app/mobiles?page=${currentPage}&size=${productPerPage}&sort=${asc ? 'asc' : 'desc'}&search=${search}&category=${category}&brand=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }, [currentPage, productPerPage, asc, search, category, brand, minPrice, maxPrice]);

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

    // Handle Category filter
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

      // Handle Brand filter 
      const handleBrandChange = (e) => {
        setBrand(e.target.value); 
        
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

            <select  value={category} onChange={handleCategoryChange} className='p-2 px-4 font-bold border-2 bg-purple-400 border-gray-100 rounded-lg'>
                        <option value="">Category</option>
                        <option value="Mobile">Mobile Phone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Camera">Camera</option>
                        <option value="TV">TV</option>
                        <option value="Headphone">Headphone</option>
                        <option value="Watch">Watch</option>
                       
            </select>

             {/* Filtering by Brand */}
             <select value={brand} onChange={handleBrandChange} className='p-2 px-4 font-bold border-2 bg-purple-400 border-gray-100 rounded-lg mt-4 lg:mt-0'>
                    <option value="">Select Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Redmi">Redmi</option> 
                    <option value="Olevs">Olevs</option>
                    <option value="Rolex">Rolex</option> 
                    <option value="Dell">Dell</option>
                    <option value="Hp">HP</option>
                    <option value="Walton">Walton</option>
                    <option value="Sony">Sony</option>
                    <option value="Canon">Canon</option>
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
                    className='px-8 py-3 text-lg font-semibold border rounded bg-sky-400 dark:border-gray-800 hover:bg-[orange] duration-1000 ease-in-out hover:text-black border-none'>
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
                    <option className='font-bold' value="8">8</option>
                    <option className='font-bold' value="16">16</option>
                    <option className='font-bold' value="24">24</option>
                    <option className='font-bold' value="32">32</option>
                    <option className='font-bold' value="40">40</option>
                    <option className='font-bold' value="48">48</option>
                    <option className='font-bold' value="56">56</option>
                    <option className='font-bold' value="64">64</option>
                    <option className='font-bold' value="72">72</option>
                    <option className='font-bold' value="80">All</option>
                </select>
            </div>
        </div>
    );
};

export default Products;























