/* eslint-disable react/prop-types */
export default function FileInput({ label, accept, onChange }) {
  return (
    <div className="mt-3">
      <label htmlFor={label}>
        {label} <span className="text-brickRed">*</span>
      </label>
      <input
        type="file"
        name="upload"
        accept={accept}
        onChange={(e) => onChange(e.target.files[0])}
        className="bg-inputGrey w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] text-sm my-3"
      />
      <div className="text-xs text-gray-500">*Files Supported: pdf only</div>
    </div>
  );
}
