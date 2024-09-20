import { useEffect } from "react";
import { useState } from "react"
import Chart from "react-google-charts"
import LoadingSpinner from "../Shared/LoadingSpinner";

  
  export const options = {
    title: 'Sales Over Time',
    curveType: 'function',
    legend: { position: 'bottom' },
    series: [{ color: '#F43F5E' }],
  }

  const SalesLineChart=({data})=>{
    const [loading,setIsLoading]=useState(true);
    useEffect(()=>{
     setTimeout(()=>setIsLoading(false),1000)
    },[])
    if (loading) {
      return <LoadingSpinner/>
    }
    return (
<>
{ loading ? (<LoadingSpinner smallHeight/>) : 
data?.length>1  ?
(<>
<Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        />
</>) :
    (
      <>
      <LoadingSpinner smallHeight/>
      <p className="text-center text-red-500 text-lg font-bold">not enough data abilable for this section</p>
      </>
    )
}
</>
    )
  }
  export default SalesLineChart;