
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import React, {  useState } from "react";




const HomeSectionCarosel = ({data, sectionName}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };


  const slidePrev = () =>  setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  
  const syncActiveIndex = (e) =>  setActiveIndex(e);

  const items = data.slice(0,10).map((item) => <HomeSectionCard productData={item}  />);

  return (
    <div className="border ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={(e) => {
            console.log('Slide changed:', e.item);
            syncActiveIndex(e);
          }}
          activeIndex={activeIndex}
          infinite={true}
          slidesToScroll={1}
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
