import { Helmet } from "react-helmet-async";
import { FaRegStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom'
const ViewDetails = () => {
    const mobiles = useLoaderData()
    const { productName, productImage, description, price, category, ratings, productCreationDateTime } = mobiles;
    return (
        <div>
            <Helmet>
                <title>CraftedEcoChic | View Details</title>
            </Helmet>
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={productImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <li className="text-xl"><span className='text-green-500 font-bold'>Product Name:</span> {productName}</li>
                        <li className="text-xl"><span className='text-green-500 font-bold'>Price:</span> $ {price} </li>
                        <li className="text-xl"><span className='text-green-500 font-bold'>Category: </span> {category}</li>
                        <li className="text-xl"><span className='text-green-500 font-bold'>Description: </span>{description}</li>
                        <li className="text-xl"><span className='text-green-500 font-bold'>Creation Date & Time:</span> {productCreationDateTime} </li>

                        <li>
                            <span className='text-green-500 font-bold text-xl'>Rating: </span>
                            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                {ratings}
                                <span style={{ width: '5px' }} />  {/* Add a small gap element */}
                                <FaRegStar className="mr-2 text-orange-400"  />
                                <FaRegStar className="mr-2 text-orange-400"  />
                                <FaRegStar className="mr-2 text-orange-400"  />
                                <FaRegStar className="mr-2 text-orange-400"  />
                            </div>
                        </li>

                        <div className=" mt-4 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Back to home</Link>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800 hover:bg-[orange] duration-1000 ease-in-out hover:text-black border-none">Explore More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;