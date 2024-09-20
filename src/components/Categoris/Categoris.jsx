import React from 'react';
import Container from '../Shared/Container';
import { categories } from './CategorisData';

import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';

const Categoris = () => {
  const [params,setParams]=useSearchParams();
  params.get('category')
  const category=params.get('category');
    return (
        <Container>
               <div className='pt-4 flex items-center justify-between overflow-x-auto'>
               
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category===item.label}/>
        ))}
      </div>
        </Container>
    );
};

export default Categoris;