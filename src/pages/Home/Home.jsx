import React from 'react';
import Rooms from './Rooms';
import Categoris from '../../components/Categoris/Categoris';

const Home = () => {
    return (
        <div>
            <Categoris></Categoris>
            <Rooms/>
        </div>
    );
};

export default Home;