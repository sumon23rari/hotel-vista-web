import axios from "axios"
import axiosSecure from "."

import axiosSecure2 from "./axiosSecure2";

export const saveUser=async user=>{
 
    console.log(user?.email,'user')
    const currentUser={
        email:user?.email,
        role:'host',
        status:'verified'
    }
    const {data}=await axiosSecure.put(`/users/${user.email}`,currentUser);
    return data;
}

export const getToken=async email=>{
    const {data}=await axiosSecure.post('/jwt',email)
    return  data;
};

// clear token
export const clearToken=async()=>{
    const {data}=await axiosSecure.get('logout')
return data;
}


// get all users
export const getAllUsers=async()=>{

    const {data}=await axiosSecure.get(`/users`)
    return data;
}

// Save user data in database
export const updateRole = async ({ email, role }) => {
    const currentUser = {
      email,
      role,
      status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
    return data
  };

// become a host
export const becomeHost = async email => {
    const currentUser = {
      email,
      status: 'Requested',
    }
    const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
    return data
  }