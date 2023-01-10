import React from "react";
import HotItemCard from "./components/HotItemCard.jsx";
import "../styles/HotAccessories.css";
const HotAccessories = (
  music,
  musicCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover
) => {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover || homeCover || lifeStyleCover || mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      {/* -----2nd */}

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              index={index}
              image={item.image}
              price={item.price}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              index={index}
              image={item.image}
              price={item.price}
            />
          ))}
        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              index={index}
              image={item.image}
              price={item.price}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              index={index} 
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default HotAccessories;
