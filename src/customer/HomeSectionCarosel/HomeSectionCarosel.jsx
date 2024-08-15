import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = () => {
    const responsive ={
        0: {items : 1},
        568: {items: 2},
        1024: {items: 5},
    };

    const items=[1,1,1,1,1,1,1].map((items)=><HomeSectionCard/>)
  return (
    
    <div className='relative px-4 lg:px-8'>
        <div className='relative px-5'>
        <AliceCarousel
        items={items}
        responsive={responsive}
    />
    <button >
        {/* <KeyboardArrowLeftIcon/> */}
    </button>
        </div>
        
    </div>
  )
}

export default HomeSectionCarosel