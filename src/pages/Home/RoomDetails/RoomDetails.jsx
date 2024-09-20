import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import { Helmet } from 'react-helmet-async';
import Container from '../../../components/Shared/Container';
import Header from './Header';
import { useLoaderData, useParams } from 'react-router-dom';
import RoomInfo from './RoomInfo';
import Calender from './Calender';
import RoomReservation from './RoomReservation';

const RoomDetails = () => {
  const {id}=useParams();
  console.log(id,'usep')
  const [loading,setLoading]=useState(false);
  const room=useLoaderData();
  console.log(room?.booked,'sdfs')
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
    return (
    
     <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <Header room={room}></Header>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
          <RoomInfo room={room}></RoomInfo>
          <div className='md:col-span-3 order-first md:order-last mb-10'>
        <RoomReservation room={room}/>
          </div>
        </div>
      </div>

      </Container>
      
    );
};

export default RoomDetails;