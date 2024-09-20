
import { Helmet } from 'react-helmet-async'

import useRole from '../../hooks/useRole'
import GuestStatistics from '../Guest/GuestStatistics';
import HostStatistics from '../Host/HostStatistics';
import AdminStatistics from '../Admin/AdminStatistics';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import SalesLineChart from '../../components/charts/SalesLineChart';

const Statistics = () => {
  const [role,isLoading] = useRole();
  console.log(role);
if (isLoading) {
  return <LoadingSpinner/>
}
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
     
      {role === 'guest' && <GuestStatistics />}
      {role === 'admin' && <AdminStatistics/>} 
      {role === 'host' && <HostStatistics />}
    </div>
  )
}

export default Statistics