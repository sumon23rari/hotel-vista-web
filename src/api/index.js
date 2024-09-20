import axios from "axios";

const axiosSecure=axios.create({
    baseURL:'https://hotel-booking-server-woad.vercel.app',
   
});

export default axiosSecure;