import logo from "../../assets/images/logo.svg";
import insta from "../../assets/images/insta.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Button from "../elements/Button";
import appleIcon from "../../assets/images/appleIcon.svg";
import playstoreIcon from "../../assets/images/playstoreIcon.svg";

export default function Footer() {
  return (
    <div className="bg-dark-blue w-full text-white px-6 md:px-[133px] pt-[56px] pb-8 ">
      <div className="md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-baseline space-y-6 md:space-y-0 justify-between">
          <div className="flex items-center text-white space-x-3">
            <img src={logo} alt="" />
            <h1>FinanceFlow</h1>
          </div>
          <div className="flex space-x-3">
            <div className="rounded-full p-2 bg-white/50">
              <img src={insta} alt="insta" />
            </div>
            <div className="rounded-full p-2 bg-white/50">
              <img src={facebook} alt="insta" />
            </div>
            <div className="rounded-full p-2 bg-white/50">
              <img src={linkedin} alt="insta" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:mt-24 mt-[45px]">
          <div className=" flex flex-col uppercase md:w-[280px] ">
            <p className="uppercase text-lg font-bold">menu</p>
            <div className="border-b border-b-white w-full mt-[31px] mb-[35px]"></div>
            
              <ul className="flex justify-between font-light pr-20 md:pr-0">
                <div className="flex flex-col space-y-[18px]">
                  <li>home</li>
                  <li>about</li>
                  <li>pricing</li>
                </div>
                <div className="flex flex-col space-y-[18px]">
                  <li>tokens</li>
                  <li>blog</li>
                  <li>contact us</li>
                </div>
              </ul>
            
          </div>
          <div className=" rounded-[40px] px-[34px] py-11 bg-white/10 max-w-[509px] mt-14 md:mt-0">
            <p className="uppercase font-bold text-lg">download our application</p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer
            </p>
            <div className="flex flex-col md:flex-row mt-6 md:space-x-4 space-y-4 md:space-y-0 ">
              <Button width="md:w-fit  py-4">
                <img src={appleIcon} alt="appleIcon" />
                <p className="mt-1 ml-2">App store</p>
              </Button>
              <Button width="md:w-fit  py-4">
                <img src={playstoreIcon} alt="playstoreIcon" />
                <p className="mt-1 ml-2">play store</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:mt-[125px] mt-8">
          <div className="border-b border-b-white/30"></div>
          <p className="mt-8 text-center md:text-left">All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
