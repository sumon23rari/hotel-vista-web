import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import useRole from '../hooks/useRole';

const DashboardLayOut = () => {
  const [role]=useRole();
  console.log(role,'odi')
    return (
        <div className='relative min-h-screen md:flex'>
        {/* Sidebar */}
    <Sidebar />
  
        {/* Outlet --> Dynamic content */}
        <div className='flex-1 md:ml-64'>
          <div className='p-5'>
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default DashboardLayOut;