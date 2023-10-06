import Button from "../elements/Button";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <ul className="flex space-x-7  [&>*]:cursor-pointer tracking-widest">
              <li onClick={()=>setIsOpen((is)=>!is)}>
                <NavLink to="/">home</NavLink>
              </li>
              <li onClick={()=>setIsOpen((is)=>!is)}>
                <NavLink to="about">about</NavLink>
              </li>
              <li onClick={()=>setIsOpen((is)=>!is)}>
                <NavLink to="pricing">pricing</NavLink>
              </li>
              <li onClick={()=>setIsOpen((is)=>!is)}>
                <NavLink to="tokens">tokens</NavLink>
              </li>
              <li onClick={()=>setIsOpen((is)=>!is)}>
                <NavLink to="blog">blog</NavLink>
              </li>
              <li onClick={()=>setIsOpen((is)=>!is)}>
                <NavLink to="contact-us">Contact us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <Button height="h-14">Download app</Button>
        </div>
      </div>

      <div
        className={`bg-bg z-50 md:hidden w-full ease-in-out duration-300  ${
          isOpen ? " h-screen" : "h-20 delay-200"
        }`}
      >
        <div className="flex mt-6 justify-between items-center">
          <div className="flex items-center text-white space-x-3 ">
            <img src={logo} alt="" />
            <h1>FinanceFlow</h1>
          </div>
          <button onClick={() => setIsOpen((is) => !is)}>
            <ul className="bg-blue rounded-full w-[45px] h-[45px] flex flex-col items-center justify-center">
              <li
                className={`border bg-white border-white w-6 ease-out duration-500 ${
                  isOpen ? "rotate-45" : ""
                } `}
              ></li>
              <li
                className={`border bg-white border-white w-6 ease-out duration-500 ${
                  isOpen ? "hidden rotate-45" : "mt-[7px]"
                } `}
              ></li>
              <li
                className={`border bg-white border-white w-6 ease-out duration-500 ${
                  isOpen ? "-rotate-45 -mt-[2px]" : "mt-[7px]"
                } `}
              ></li>
            </ul>
          </button>
        </div>

        <nav
          className={` ease-in duration-200  ${
            isOpen ? "delay-100" : "opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-5 text-white uppercase text-[32px] font-bold absolute top-1/2 -translate-y-[47%] left-1/2 -translate-x-1/2 [&>*]:cursor-pointer">
            <li onClick={()=>setIsOpen((is)=>!is)}>
              <NavLink to="/" >home</NavLink>
            </li>
            <li onClick={()=>setIsOpen((is)=>!is)}>
              <NavLink to="about">about</NavLink>
            </li>
            <li onClick={()=>setIsOpen((is)=>!is)}>
              <NavLink to="pricing">pricing</NavLink>
            </li>
            <li onClick={()=>setIsOpen((is)=>!is)}>
              <NavLink to="tokens">tokens</NavLink>
            </li>
            <li onClick={()=>setIsOpen((is)=>!is)}>
              <NavLink to="blog">blog</NavLink>
            </li>
            <li onClick={()=>setIsOpen((is)=>!is)}>
              <NavLink to="contact-us">Contact us</NavLink>
            </li>
            <Button width="w-[300px]">download app</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
