
import { FaImages,  FaUserEdit } from 'react-icons/fa';
import { IoEyeSharp, IoKey, IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Typewriter } from 'react-simple-typewriter'
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import 'animate.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';
import loginImg from '../assets/banner/login.jpg';
import { useLocation, useNavigate} from 'react-router-dom';


const Register = () => {

    //Showing password:
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('');

    const location = useLocation()
    const navigate = useNavigate()

    const auth = getAuth(app);
    const {createUser} = useContext(AuthContext)
    //SignUp with google:
     const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log("error", error.message);
        })
    }

    //SignUp with Email:
    const handleRegister = (e) =>{
        e.preventDefault()
        const username = e.target.username.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

          //Clear the state:
          setRegisterError('')
          setSuccess('')
  

        
          //Validation Check:
          if(password.length < 6){
            setRegisterError('Password should be at least 6 character or long!');
            return;
        }
        if(!/[A-z]/.test(password)){
            setRegisterError('Make a strong password with various character');
            return ;
        }


        createUser( email, password, username, photo)
        .then(result =>{
            Swal.fire({
                title: "User Created successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
              //Navigate after login:
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => error.message)

        
    }


//TypeWriter:
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }


    return (
        <div>
           <Helmet>
                <title>ShopEase | Register</title>
            </Helmet>
            <div className='h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${loginImg})` }}>
                <div className='w-full max-w-md border-[1px] border-[#7c1962] lg:p-8 rounded-xl dark:bg-gray-50 dark:text-gray-800 mx-auto shadow-xl text-white'>
                <div className='text-center'>
                    <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                  
                        <span style={{ color: 'red', fontWeight: 'bold' , fontSize: '24px'}}>
                         
                            <Typewriter
                                words={['Register Now!']}
                                loop={50}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}

                            />
                        </span>
                    </h1>
                </div>


                <form onSubmit={handleRegister} data-aos-easing="zoom-in" data-aos-duration='2000' noValidate="" action="" className="space-y-6  animate__animated animate__zoomIn">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <div className='relative'>
                            <input type="text" name="username" placeholder="Username" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 bg-transparent dark:bg-gray-50 dark:text-gray-800 border-[1px] border-white" />
                            <div className='absolute top-4 left-2'>
                                <FaUserEdit className='text-xl' />
                            </div>
                        </div>
                        <label htmlFor="url" className="block dark:text-gray-600">Photo URL</label>
                        <div className='relative'>
                            <input type="text" name="photo" placeholder="Photo URL" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 bg-transparent dark:bg-gray-50 dark:text-gray-800 border-[1px] border-white" />
                            <div className='absolute top-4 left-2'>
                                <FaImages className='text-xl' />
                            </div>
                        </div>

                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <div className='relative'>
                            <input type="email" name="email" placeholder="Email" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 bg-transparent dark:bg-gray-50 dark:text-gray-800 border-[1px] border-white" />
                            <div className='absolute top-4 left-2'>
                                <IoMail className='text-xl' />
                            </div>
                        </div>

                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600"> Password</label>

                        <div className='relative'>
                            <input type= {showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder=" Choose Password"
                                required
                                className="w-full px-8 py-3 rounded-md dark:border-gray-300 bg-transparent dark:bg-gray-50 dark:text-gray-800 border-[1px] border-white" />
                            <div className='absolute top-4 right-3'>


                            </div>
                            <div className='absolute top-4 left-2'>
                                <IoKey className='text-xl' />
                            </div>
                            <div onClick={()=> setShowPassword(!showPassword)} className='absolute top-4 right-4'>
                                {showPassword ? <IoEyeSharp className='text-xl' /> : <HiMiniEyeSlash className='text-xl' />}
                            
                            </div>
                        </div>

                    </div>
                    
                    <button className="block w-full text-center text-white text-lg dark:bg-violet-600 font-bold rounded-lg btn btn-secondary">Register</button>
                </form>

                {/*Showing Error and Success Message*/}
                <div className="errorDiv">
                        {
                            registerError && <p className='text-white font-semibold text-xl'>{registerError}</p>
                        }
                        {
                            success && <p className='text-green-500 font-semibold text-xl'>{success}</p>
                        }
                    </div>
               
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin}  aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>

                <p className="text-xl text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800 font-bold text-blue-600"> Login</Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Register;