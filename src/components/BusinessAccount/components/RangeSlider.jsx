/* eslint-disable react/prop-types */

const RangeSlider = ({ formData, setFormData }) => {
  return (
    <div className="mt-10">
      <input
        type="range"
        min="0"
        max="100"
        value={formData.valueOfEquity}
        onChange={(e) => {
          setFormData({ ...formData, valueOfEquity: e.target.value });
        }}
        className="custom-range-slider rounded-full"
      />
      <div className="text-lg">{formData.valueOfEquity}</div>
    </div>
  );
};

export default RangeSlider;
