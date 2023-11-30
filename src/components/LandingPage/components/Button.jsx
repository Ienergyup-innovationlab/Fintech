/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function Button({ text, url, variant, onClick }) {
  return (
    <Link
      to={url}
      className={` ${variant} bg-purple rounded-full  font-[700]`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
