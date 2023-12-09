// RangeSlider.js
import { useState } from "react";

const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className=" mt-10">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="custom-range-slider rounded-full"
      />
      <span className="ml-3 text-lg">{sliderValue}</span>
    </div>
  );
};

export default RangeSlider;
