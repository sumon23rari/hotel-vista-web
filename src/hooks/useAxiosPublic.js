import axios from 'axios';

const axiosPublic=axios.create({
    baseURL:'https://hotel-booking-server-woad.vercel.app'
})
const useAxiosPublic = () => {
 
    return axiosPublic;
};

export default useAxiosPublic;