import { useState, useEffect } from "react";
import logo from "../images/fundcraft-logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import IconComment from "../images/message-icon.png";
import IconNotify from "../images/notification-icon.png";
import IconSearch from "../images/search-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`bg-primary ${
          isSticky ? "sticky top-0 right-0 left-0 bg-primary " : ""
        }`}
      >
        <div className="flex items-center justify-between md:pl-12 tab-pleft">
          <div className="text-white font-bold text-lg cursor-pointer pt-8">
            <Link to="/">
            <img src={logo} alt="" className="h-20" />
            </Link>
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-4 hidden text-body pt-8">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block text-white hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="invest"
              className="block text-white hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              Invest
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="community"
              className="block text-white  hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              Community
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="loan"
              className="block text-white  hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              Loan
            </Link>
          </div>

          {/* contact me btn */}
          <div className="lg:flex hidden bg-black py-8 pl-20 pr-10 pt-12 topnav-div">
            <Link
              to="/Chatpage"
              smooth={true}
              spy={true}
              offset={-100}
              className="text-white hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              <img src={IconComment} alt="" className="mb-2 pl-5" />
              Message
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="notification"
              className="block text-white hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              <img src={IconNotify} alt="" className="mb-2 pl-8" />
              Notification
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="search"
              className="block text-white  hover:text-gray-400 py-2 px-4 cursor-pointer font-medium"
            >
              <img src={IconSearch} alt="" className="mb-2 pl-5" />
              Search
            </Link>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block hover:text-gray-400 py-2"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="invest"
              className="block hover:text-gray-400 py-2"
            >
              Invest
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="community"
              className="block hover:text-gray-400 py-2"
            >
              Community
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="loan"
              className="block hover:text-gray-400 py-2"
            >
              Loan
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="message"
              className="block hover:text-gray-400 py-2"
            >
              Message
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="notification"
              className="block hover:text-gray-400 py-2"
            >
              Notification
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="search"
              className="block hover:text-gray-400 py-2"
            >
              Search
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;