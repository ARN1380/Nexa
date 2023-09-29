import Button from "../elements/Button";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-center px-6 md:px-0 bg-bg -z-50">
      <div className="max-w-container w-full items-center justify-between py-9 z-10 hidden md:flex md:border-0 ">
        <div className="flex items-center space-x-16">
          <div className="flex items-center text-white space-x-3">
            <img src={logo} alt="" />
            <h1>FinanceFlow</h1>
          </div>
          <div className=" h-[66px] border-l border-l-dark-blue"></div>
          {/* desktop menu */}
          <nav className="text-sm text-white uppercase ">
            <ul className="flex space-x-7">
              <li>home</li>
              <li>about</li>
              <li>pricing</li>
              <li>tokens</li>
              <li>blog</li>
              <li>contact us</li>
            </ul>
          </nav>
        </div>
        <div className="">
          <Button height="h-14">Download app</Button>
        </div>
      </div>
      <div
        className={`bg-bg z-50 md:hidden w-full ${
          isOpen ? " h-screen" : "h-20"
        }`}
      >
        <div className="flex mt-6 justify-between items-center">
          <div className="flex items-center text-white space-x-3 ">
            <img src={logo} alt="" />
            <h1>FinanceFlow</h1>
          </div>
          <button onClick={() => setIsOpen((is)=>!is) }>
            <ul className="bg-blue rounded-full w-[45px] h-[45px] flex flex-col items-center justify-center">
              <li
                className={`border border-white w-6 ease-out duration-500 ${
                  isOpen ? "rotate-45" : ""
                } `}
              ></li>
              <li
                className={`border border-white w-6 ease-out duration-500 ${
                  isOpen ? "hidden rotate-45" : "mt-[7px]"
                } `}
              ></li>
              <li
                className={`border border-white w-6 ease-out duration-500 ${
                  isOpen ? "-rotate-45 -mt-[2px]" : "mt-[7px]"
                } `}
              ></li>
            </ul>
          </button>
        </div>

        <nav className={`${isOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col items-center space-y-5 text-white uppercase text-[32px] font-bold absolute top-1/2 -translate-y-[47%] left-1/2 -translate-x-1/2">
            <li>home</li>
            <li>about</li>
            <li>pricing</li>
            <li>tokens</li>
            <li>blog</li>
            <li>contact us</li>
            <Button width="w-[300px]">download app</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
