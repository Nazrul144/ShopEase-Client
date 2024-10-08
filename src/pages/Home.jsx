
import { Helmet } from 'react-helmet-async';

import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../assets/banner/1.jpg'
import image2 from '../assets/banner/2.jpg'
import image3 from '../assets/banner/3.jpg'
import image4 from '../assets/banner/4.jpg'
import image5 from '../assets/banner/5.jpg'
import image6 from '../assets/banner/6.jpg'
import image7 from '../assets/banner/7.jpg'
import image8 from '../assets/banner/8.jpg'
import image9 from '../assets/banner/9.jpg'
import image10 from '../assets/banner/10.jpg'
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
     
      <div className='container  py-8 mx-auto mt-20 lg:mt-4 '>
        <Swiper
          spaceBetween={0}
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

          <SwiperSlide>
            <Slide image={image5} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={image6} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={image7} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={image8} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={image9} text=' New Arrival!' className='rounded-lg'></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide image={image10} text=' New Arrival!' className='rounded-lg'></Slide>
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

