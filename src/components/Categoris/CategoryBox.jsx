import PropTypes from 'prop-types'
import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string';
const CategoryBox = ({ label, icon: Icon,selected }) => {
  const [params,setParams]=useSearchParams();
  params.get('category')
  const naivate=useNavigate();
  const handleClick=()=>{
    let currentQuery={};
    if (params) {
      console.log(params,'dsfsdf')
      currentQuery=qs.parse(params.toString());
    }
      const updateQuery={...currentQuery,category:label}
      const url=qs.stringifyUrl({
        url:'/',
        query:updateQuery
      })
      naivate(url)
    
  }
  return (
    <div
    onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${selected? 'border-b-neutral-800 text-neutral-800':'border-transprant text-neutral-500'}`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
