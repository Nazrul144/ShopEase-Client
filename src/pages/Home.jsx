
import { Helmet } from 'react-helmet-async';

import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../assets/banner/1.jpg'
import image2 from '../assets/banner/2.jpg'
import image3 from '../assets/banner/3.jpg'
import image4 from '../assets/banner/4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import { Link } from 'react-router-dom';



const Home = () => {
 
    return (
        <div>
            <div>
            <Helmet>
                <title>ShopEase | Home</title>
            </Helmet>
            </div>
            <h1>This is home</h1>
     
      <div className='container  py-8 mx-auto mt-20 lg:mt-4 '>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"

        >
          <SwiperSlide >
            <Slide image={image1} text='New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>


          <SwiperSlide>
            <Slide image={image2} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>


          <SwiperSlide>
            <Slide image={image3} text='New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={image4} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='flex justify-center mt-4 mb-16'>
      <Link to='/products'>
      <button className='px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800 hover:bg-[orange] bg-purple-400 duration-1000 ease-in-out hover:text-black border-none'>See All Product</button>
      </Link>
      </div>
    
        </div>
    );
};

export default Home;

