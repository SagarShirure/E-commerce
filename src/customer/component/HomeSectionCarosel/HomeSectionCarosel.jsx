
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import React, {  useState } from "react";
import mens_kurta from "../../../Data/Men/men_kurta.js"



const HomeSectionCarosel = ({data, sectionName}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 5 },
  };


  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  
  const slideNext = () => {
    if (activeIndex < items.length - 5) setActiveIndex(activeIndex + 1);
  };
 
  
  const syncActiveIndex = (e) => {
    if (e >= 0 && e < items.length) setActiveIndex(e);
    setActiveIndex(e);
  };


  const items = data.map((items) => <HomeSectionCard productData={items}  />);

  return (
    <div className="border ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 &&      <Button
            variant="contained"
            className="z-20"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%) rotate(360deg)",
            }}
            bgcolor="white"
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-180deg)" }} />
          </Button>
}
       {activeIndex !== 0 && <Button
          variant="contained"
          className="z-20"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-10%) rotate(180deg)",
          }}
          bgcolor="white"
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </Button>}
      </div>
    </div>
  );
};


export default HomeSectionCarosel;
