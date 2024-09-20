import React from 'react';
import MenuItem from '../Sidebar/Menu/MenuItems';
import { FaUserCog } from 'react-icons/fa';
const AdminMenu = () => {
    return (
        <>
        <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      </>
    );
};

export default AdminMenu;