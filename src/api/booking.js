import useAxiosPublic from "../hooks/useAxiosPublic"
const axiosPublic=useAxiosPublic();
export const createPaymentIntent=async (price)=>{
    const {data}=await axiosPublic.post('/create-payment-intent',price)
    return data;
};

// save booking info in db
export const saveBookingInfo=async (paymentInfo)=>{
    const {data}=await axiosPublic.post('/bookings',paymentInfo);
    return data;
};

// update room status after booking in db
export const updateStatus=async (id,status)=>{
    const {data}=await axiosPublic.patch(`/rooms/status/${id}`,{status});
    console.log(data,'ddd')
    return data;
};

// get all bookings for a gust by email
export const getBookings=async (email)=>{
    const {data}=await axiosPublic(`/bookings?email=${email}`);
    return data;
};
// get all bookings for a host by email
export const getHostBookings=async (email)=>{
    const {data}=await axiosPublic(`/bookings?email=${email}`);
    return data;
};