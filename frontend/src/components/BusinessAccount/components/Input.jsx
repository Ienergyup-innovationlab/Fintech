/* eslint-disable react/prop-types */
export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-inputGrey w-[320px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] ${className}`}
    />
  );
}
