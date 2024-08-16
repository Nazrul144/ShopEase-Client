import { useContext } from "react";
import {Navigate} from 'react-router-dom'
import { AuthContext } from "../provider/AuthProvider";
import {useLocation} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;