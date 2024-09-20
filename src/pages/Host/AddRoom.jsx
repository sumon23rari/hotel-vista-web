import React, { useState } from 'react';
import AddRoomForm from '../../components/Form/AddRoomForm';
import { imageUpload } from '../../api/utilitis';
import useAuth from '../../hooks/useAuth';
import { addroom } from '../../api/room';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddRoom=()=>{
   const {user}=useAuth();
   const [loading,setLoading]=useState(false);
   const navigation=useNavigate();
   const [uploadButtonText,setUploadButtonText]=useState('upload image')
    const [dates,setDates]=useState({
        startDate:new Date(),
        endDate:new Date(),
        key:'selection'
    })
    const handleSubmit=async(e)=>{
        setLoading(true);
        e.preventDefault();
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to=dates.endDate;
        const from=dates.startDate;
        const price = form.price.value
        const guests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0];
        const host={
            name:user?.displayName,
            image:user?.photoURL,
            email:user?.email
        }
        const imageUrl=await imageUpload(image);
        console.log('imageUrl',imageUrl)
        const roomData={
            location,
            category,
            title,
            from,
            to, 
            price,
            guests,
            bathrooms,
            host,
            description,
            bedrooms,
            image:imageUrl
        };
        try {
         
            const data=await addroom(roomData);
            setUploadButtonText('uploaded');
            toast.success('room added successfully');
            navigation('/dashboard/myListings')
      
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        finally{
            console.table(roomData,'roomData')
            setLoading(false)
        }


    }
  
    // handle date change from react-range-calender 
    const handleDates=ranges=>{
        setDates(ranges.selection)
    };
    // handle image button text
    const handleImageChange=image=>{
        setUploadButtonText(image.name)
    }
    return (
        <div>
<AddRoomForm 
handleSubmit={handleSubmit} 
handleDates={handleDates} 
dates={dates}
handleImageChange={handleImageChange}
loading={loading}
uploadButtonText={uploadButtonText}
/>
        </div>
    );
};
export default AddRoom;