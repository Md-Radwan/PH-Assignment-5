import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className="relative">
      <div className="container px-4 py-6 flex justify-between items-center fixed right-0 left-0 bg-white">
        <RxHamburgerMenu className="text-4xl md:hidden"/>
        <img src={logo} alt="logo picture" />
        <ul className="hidden md:flex gap-7.5 text-[#475569] text-sm font-medium leading-5 items-center">
          <li className="text-[#DB2777]">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="py-1.5 px-3 md:py-2.5 md:px-5 rounded-full font-semibold text-[12px] md:text-sm leading-5 cursor-pointer">
            Sign In
          </button>
          <button className="py-1.5 px-2 md:py-2.5 md:px-5 rounded-full bg-[#D91B7E] text-white font-semibold text-[12px] md:text-sm leading-5 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
