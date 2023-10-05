import crypto1 from "../../assets/images/portfolio/crypto1.svg";
import crypto2 from "../../assets/images/portfolio/crypto2.svg";
import crypto3 from "../../assets/images/portfolio/crypto3.svg";
import crypto4 from "../../assets/images/portfolio/crypto4.svg";
import Button from "../elements/Button";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center bg-bg text-white overflow-hidden relative">
      <div className="max-w-container w-full flex flex-col items-center px-4 md:px-0">
        <div className="md:text-center mt-10">
          <h1 className="h1">Pricing</h1>
          <p className="paragraph w-full max-w-[568px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row space-y-[38px] md:space-y-0 justify-between w-full">
          <div className="flex space-x-6 items-center">
            <div className="bg-blue w-[68px] h-[68px] rounded-[20px] flex justify-center items-center ">
              <img src={crypto4} alt="" />
            </div>
            <p className="text-lg font-light">Send & receive</p>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="bg-blue w-[68px] h-[68px] rounded-[20px] flex justify-center items-center ">
              <img src={crypto1} alt="" />
            </div>
            <p className="text-lg font-light">Send & receive</p>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="bg-blue w-[68px] h-[68px] rounded-[20px] flex justify-center items-center ">
              <img src={crypto2} alt="" />
            </div>
            <p className="text-lg font-light">Send & receive</p>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="bg-blue w-[68px] h-[68px] rounded-[20px] flex justify-center items-center ">
              <img src={crypto3} alt="" />
            </div>
            <p className="text-lg font-light">Send & receive</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col md:flex-row md:space-x-[26px] space-y-4 md:space-y-0 md:mb-[225px] mb-20">
          <div className="bg-dark-blue px-[30px] pt-12 pb-[42px] rounded-[40px]">
            <p className="uppercase text-sm px-[14px] py-[9px] bg-blue rounded-full w-fit">basic</p>
            <h2 className="h2 mt-4">$ 100 USD</h2>
            <p className="paragraph mt-4">Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

            <h6 className="mt-10 font-bold text-lg uppercase tracking-[1px]">features</h6>
            <ul className="mt-4 mb-[54px] flex flex-col space-y-4 paragraph">
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Everything included in Basic</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Trading up to $1MM per month</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Windows & macOS App</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Premium Support</p></li>              
            </ul>
            <Button width="w-full">contact us</Button>
          </div>
          <div className="bg-dark-blue px-[30px] pt-12 pb-[42px] rounded-[40px]">
            <p className="uppercase text-sm px-[14px] py-[9px] bg-blue rounded-full w-fit">basic</p>
            <h2 className="h2 mt-4">$ 100 USD</h2>
            <p className="paragraph mt-4">Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

            <h6 className="mt-10 font-bold text-lg uppercase tracking-[1px]">features</h6>
            <ul className="mt-4 mb-[54px] flex flex-col space-y-4 paragraph">
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Everything included in Basic</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Trading up to $1MM per month</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Windows & macOS App</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Premium Support</p></li>              
            </ul>
            <Button width="w-full">contact us</Button>
          </div>
          <div className="bg-dark-blue px-[30px] pt-12 pb-[42px] rounded-[40px]">
            <p className="uppercase text-sm px-[14px] py-[9px] bg-blue rounded-full w-fit">basic</p>
            <h2 className="h2 mt-4">$ 100 USD</h2>
            <p className="paragraph mt-4">Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

            <h6 className="mt-10 font-bold text-lg uppercase tracking-[1px]">features</h6>
            <ul className="mt-4 mb-[54px] flex flex-col space-y-4 paragraph">
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Everything included in Basic</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Trading up to $1MM per month</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Windows & macOS App</p></li>
              <li className="flex items-center space-x-4"><div className="w-[6px] h-[6px] rounded-full bg-blue" ></div> <p>Premium Support</p></li>              
            </ul>
            <Button width="w-full">contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
