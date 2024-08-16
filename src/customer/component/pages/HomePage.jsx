import React from 'react'
import MainCarousel from '../Home/MainCarousel.jsx'
import HomeSectionCarosel from '../HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/Men/men_kurta'
import { mensPantsPage1 } from '../../../Data/pants/men_page1.js'
import { lehngacholiPage2 } from '../../../Data/Women/lenghaCholiPage2.js'
import { sareePage1 } from '../../../Data/Saree/page1.js'
import { mensShoesPage1 } from '../../../Data/shoes.js'

const HomePage = () => {
  return (
    <div className='flex flex-col space-y-10 '>
      <div>
        <MainCarousel />
      </div>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName="Men's Kurta" />
        <HomeSectionCarosel data={mensShoesPage1} sectionName="Men's Shoes" />
        <HomeSectionCarosel data={mens_kurta} sectionName="Men's Shirts" />
        <HomeSectionCarosel data={mensPantsPage1} sectionName="Men's Jeans" />
        <HomeSectionCarosel data={lehngacholiPage2} sectionName="Women's Kurta" />
        <HomeSectionCarosel data={sareePage1} sectionName="Women's Saree" />

      </div>
    </div>
  );
};


export default HomePage
