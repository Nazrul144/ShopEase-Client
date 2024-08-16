import { Fade } from "react-awesome-reveal";
// import 'animate.css';
const About = () => {
    return (
        <div>
            <div className='ml-8 mr-8'>
                <div className='mt-10'>
                <Fade cascade>
                <h3 className='text-xl font-bold text-sky-400 mt-6 animate__animated animate__fadeInRight animate__animated animate__backInDown'>About Our Mobile Store</h3>
                    <p className='animate__animated animate__fadeInLeftBig'>
                        Welcome to our Mobile Store, your one-stop destination for the latest and greatest mobile phones. We are passionate about connecting you with the best devices that suit your needs and lifestyle.
                    </p>
               </Fade>
                    
               <Fade cascade>
               <h3 className='text-xl font-bold text-sky-400 mt-6 animate__animated animate__fadeInUp'>Our Journey</h3>
                    <p className='animate__animated animate__fadeInRight'>
                        Since our inception, we have been dedicated to bringing you the most innovative and reliable mobile phones on the market. Our store is built on a foundation of trust, quality, and a commitment to customer satisfaction.
                    </p>
            </Fade>

            <Fade cascade>
            <h3 className='text-xl font-bold text-sky-400 mt-6 animate__animated animate__jackInTheBox'>Our Commitment</h3>
                    <p>
                        We pride ourselves on offering top-notch customer service and a wide range of mobile phones from leading brands. Whether you are looking for the latest flagship model or a budget-friendly option, we ensure that you find the perfect phone that meets your expectations.
                    </p>
            </Fade>

            <Fade cascade>
            <h3 className='text-xl font-bold text-sky-400 mt-6 animate__animated animate__jackInTheBox'>Why Choose Us?</h3>
                    <p>
                        We believe in providing an exceptional shopping experience. Our expert team is here to help you make informed decisions, and our competitive prices ensure you get the best value for your money. Trust us to deliver quality and excellence every time.
                    </p>
            </Fade>

            <Fade cascade>
                  <h3 className='text-xl font-bold text-sky-400 mt-6 animate__animated animate__jackInTheBox'>Customer Support & Services</h3>
                    <p className='animate__animated animate__lightSpeedInRight'>
                        Your satisfaction is our priority. We offer comprehensive customer support, easy returns, and reliable warranties on all our products. Shop with confidence, knowing that our dedicated team is here to assist you every step of the way, even after your purchase.
                    </p>
                 </Fade>   

            <Fade cascade>
                  <h3 className='text-xl font-bold text-sky-400 mt-6 animate__animated animate__jackInTheBox'>Explore the Latest Phones</h3>
                    <p className='animate__animated animate__lightSpeedInRight'>
                        Discover the newest mobile phones on the market, featuring cutting-edge technology, stunning designs, and innovative features. From smartphones with the best cameras to those with the longest battery life, find your ideal match with us.
                    </p>
                 </Fade>   
                 
                  <Fade fraction>
                  <small className='font-semibold animate__animated animate__flipInX mt-24'>Thank you for choosing our Mobile Store as your trusted partner in technology.</small>
                 </Fade>   
                    
                </div>
            </div>
        </div>
    );
};

export default About;
