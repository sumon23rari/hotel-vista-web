import React from 'react';
import MenuItem from '../Sidebar/Menu/MenuItems';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { MdHomeWork,MdOutlineManageHistory } from 'react-icons/md';
const HostMenu = () => {
    return (
        <div>
              <MenuItem
              icon={BsFillHouseAddFill}
              label='addroom'
              address='/dashboard/addRoom'
            />
            <MenuItem
              icon={MdHomeWork}
              label='mylistings'
              address='/dashboard/myListings'
            />
            <MenuItem
              icon={MdOutlineManageHistory}
              label='manageBookings'
              address='/dashboard/manageBookings'
            />
        </div>
    );
};

export default HostMenu;