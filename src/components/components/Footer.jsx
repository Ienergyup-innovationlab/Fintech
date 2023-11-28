import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slade font-libre py-9 px-3">
      <div>
        <h1 className="text-4xl">Fintech App</h1>
        <div className="flex items-center  space-x-4">
          <Link to="/">
            <img src="/googleplay.svg" alt="" className="w-36 h-36 p-0" />
          </Link>
          <Link to="/">
            <img src="/applestore.svg" alt="" className="w-36 h-36 p-0" />
          </Link>
        </div>
        <div> All rights reserved for &copy; IENENERGYU-UP - {currentYear}</div>
      </div>
    </footer>
  );
}
