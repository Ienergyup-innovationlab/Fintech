/* eslint-disable react/prop-types */

const RangeSlider = ({ formData, setformData }) => {
  return (
    <div className="mt-10">
      <input
        type="range"
        min="0"
        max="100"
        value={formData.valueOfEquity}
        onChange={(e) => {
          setformData({ ...formData, valueOfEquity: e.target.value });
        }}
        className="custom-range-slider rounded-full"
      />
      <div className="text-lg">{formData.valueOfEquity}</div>
    </div>
  );
};

export default RangeSlider;
