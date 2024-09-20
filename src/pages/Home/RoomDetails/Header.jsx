import React from 'react';
import Heading from '../../../components/Heading/Heading';
const Header = ({room}) => {
    return (
      <>
      <Heading title={room?.title} subtitle={room?.location}></Heading>
<div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
<img src={room?.image} className='object-cover w-full'
/>
</div>
      </>
    );
};

export default Header;