import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";

function NavBar() {
  const [isToggle,setIsTogged] = useState(false);
  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between items-center w-[85%] mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <h1 className="font-bold text-2xl p-1 text-center lg:p-5">Blogging Site</h1>
          <ul className="hidden lg:flex text-lg font-semibold">
            <a href="#" className="p-1 text-center lg:p-5 hover:text-gray-500">
              Home
            </a>
            <a href="#" className="p-1 text-center lg:p-5 hover:text-gray-500 flex gap-1 lg:gap-2">
              Products
              <span>
                <FaAngleDown className="text-xl lg:text-2xl"/>
              </span>
            </a>
            <a href="#" className=" hover:text-gray-500 p-1 text-center lg:p-5 flex gap-1 lg:gap-2">
              Resources
              <span>
                <FaAngleDown className=" text-xl lg:text-2xl"/>
              </span>
            </a>
            <a href="#" className="p-1 text-center lg:p-5 hover:text-gray-500">
              Pricing
            </a>
          </ul>
        </div>
        <div className="lg:text-lg hidden ">
          <button className="font-semibold">Log in</button>
          <button className="px-4 py-3  ml-5 font-semibold rounded-full text-white bg-black">
            Sign up
          </button>
        </div>
      </nav>

      <ul className={`flex flex-col text-lg font-semibold lg:hidden ${!isToggle ? "translate-y-[-500px]" : "translate-y-0"}`}>
            <a href="#" className="p-1 text-center lg:p-5 hover:text-gray-500">
              Home
            </a>
            <a href="#" className="p-1 text-center lg:p-5 hover:text-gray-500">
              Products
            </a>
            <a href="#" className=" hover:text-gray-500 p-1 text-center">
              Resources
            </a>
            <a href="#" className="p-1 text-center lg:p-5 hover:text-gray-500">
              Pricing
            </a>
            <button className="font-semibold">Log in</button>
            <button className="font-semibold">Sign up</button>
          </ul>
          

      <IoReorderThreeOutline className="text-5xl absolute top-5 right-5 lg:hidden z-20" onClick={()=>setIsTogged(!isToggle)}/>
    </>
  );
}
export default NavBar;
