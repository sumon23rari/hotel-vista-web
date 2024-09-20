import axiosSecure from "."


export const getAllrooms=async()=>{
    const {data}=await axiosSecure('/rooms');
    return data;
};
// fetch all rooms for host
export const getHostRooms=async(email)=>{
const {data}=await axiosSecure(`/rooms/${email}`);
return data;
}
// fetch single room
export const singleRoom=async(id)=>{
    const {data}=await axiosSecure(`/room/${id}`);
    return data;
};

// save a room data in db
export const addroom=async(roomData)=>{
    const {data}=await axiosSecure.post(`/rooms`,roomData)
    return data;
}