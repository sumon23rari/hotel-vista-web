import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import Card from './Card';
import Heading from '../../components/Heading/Heading';
import { useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import { getAllrooms } from '../../api/room';
const Rooms = () => {
    const [rooms,setRooms]=useState([]);
    const [loading,setLoading]=useState(false);
    const [params,setParams]=useSearchParams();
    const category=params.get('category');
console.log(rooms,'rooms')
    useEffect(()=>{
     setLoading(true);
     getAllrooms()
        .then((data)=>{
          console.log(data,'data')
          if (category) {
            const filterd=data.filter((room=>room.category===category))
            setRooms(filterd)
          
          } else {
            setRooms(data)
           setLoading(false)
          }
        })
    },[category]);
if (loading) {
  return <LoadingSpinner/>
}
    return (
        <Container>
        {rooms && rooms.length > 0 ? (
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {rooms.map(room => (
              <Card key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
            <Heading
              center={true}
              title='No Rooms Available In This Category!'
              subtitle='Please Select Other Categories.'
            />
          </div>
        )}
      </Container>
    );
};

export default Rooms;