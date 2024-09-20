import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export const axiosSecure=axios.create({
    baseURL:'https://hotel-booking-server-woad.vercel.app'
});


const axiosSecure2 = () => {
    const navigate=useNavigate();
    const {logOut}=useAuth();
      // Add a request interceptor
    axiosSecure.interceptors.request.use((config)=>{
      const token=localStorage.getItem('hotelManageMent');
      config.headers.authorization=`Bearer ${token}`
  console.log('request stopped by interceptors');
  return config;
    },(error)=>{
   // Do something with response error
   return Promise.reject(error);
    });
    // Add a response interceptor
    axiosSecure.interceptors.response.use((response)=>{
      return response;
    },async(error)=>{
      console.log(error,'errro dekhao amare')
      const status=error.response.status;
      console.log('status error in the interceptors',status);
      if (status===401 || status===403) {
        await logOut();
        navigate('/login')
      }
    })
      return axiosSecure;
  };
export default axiosSecure2;