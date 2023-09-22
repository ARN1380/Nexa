import Header from "../../Header/Header";
import Button from "./../../elements/Button";
import Footer from "./../../footer/Footer";
import macSvg from "../../../assets/images/mac.svg";
import brightCircle from "../../../assets/images/brighter-circle.svg";
import darkCircle from "../../../assets/images/darker-circle.svg";
import comp1 from "../../../assets/images/comp1.svg";
import comp2 from "../../../assets/images/comp2.svg";
import comp3 from "../../../assets/images/comp3.svg";
import comp4 from "../../../assets/images/comp4.svg";
import comp5 from "../../../assets/images/comp5.svg";
import crypto1 from "../../../assets/images/portfolio/crypto1.svg";
import crypto2 from "../../../assets/images/portfolio/crypto2.svg";
import crypto3 from "../../../assets/images/portfolio/crypto3.svg";
import crypto4 from "../../../assets/images/portfolio/crypto4.svg";
import iphone from "../../../assets/images/portfolio/iphones.svg";

export default function Landing() {
  return (
    <div className="bg-bg overflow-hidden flex justify-center text-white">
      <div className=" relative max-w-[1920px]">
        <div className="md:w-[1145px] md:h-[1145px] w-[800px] h-[800px] absolute md:-top-[420px] md:-left-[30%] top-[200px] -right-[280px] ">
          <img className="md:opacity-40 opacity-60" src={darkCircle} alt="" />
        </div>
        <div className="md:w-[874px] md:h-[874px] w-[1000px] h-[1000px] absolute md:top-[270px] md:left-[52%] top-[1300px] -right-[200px]">
          <img
            className="opacity-80 md:opacity-100" 
            src={brightCircle}
            alt=""
          />
        </div>

        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col items-center ">
      {/* hero section */}
      <div className="flex relative overflow-hidden ">
        <div className="flex justify-center w-screen px-4">
          <div className="max-w-container w-full pt-20 flex flex-col md:flex-row items-center md:h-[660px] ">
            <div className="max-w-[738px] z-20">
              <h1 className="font-bold text-[38px] md:text-[66px] leading-tight ">
                Buy, trade, and hold 350+ cryptocurrencies
              </h1>
              <p className="max-w-[568px] md:text-lg mt-4 md:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aenean dis placerat.
              </p>
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-7 mt-10">
                <Button height="h-[70px]">download app</Button>
                <Button type="transparent" height="h-[70px]">
                  view pricing
                </Button>
              </div>
            </div>
            <div className="h-full z-10">
              <img
                className="md:max-w-none mt-10 md:mt-0 left-[55%] md:absolute "
                src={macSvg}
                alt="mac book"
              />
            </div>
          </div>
        </div>
      </div>

      {/* company section */}
      <div className="mt-20 md:mt-[170px] flex flex-col items-center max-w-container w-full">
        <p className="text-lg font-light">Finance flow has been featured on</p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-6 md:grid-cols-5 px-10 md:px-0 justify-items-center">
          <div className="flex space-x-[10px] items-center">
            <img src={comp1} alt="company" />
            <h2 className="text-lg font-bold">company</h2>
          </div>
          <div className="flex space-x-[10px] items-center">
            <img src={comp2} alt="company" />
            <h2 className="text-lg font-bold">Company</h2>
          </div>
          <div className="flex space-x-[10px] items-center">
            <img src={comp3} alt="company" />
            <h2 className="text-lg font-bold">company</h2>
          </div>
          <div className="flex space-x-[10px] items-center">
            <img src={comp4} alt="company" />
            <h2 className="text-lg font-bold">Company</h2>
          </div>
          <div className="flex space-x-[10px] items-center col-span-2 md:col-span-1">
            <img src={comp5} alt="company" />
            <h2 className="text-lg font-bold">Company</h2>
          </div>
        </div>
      </div>

      {/* crypto portfolio section */}
      <div className="mt-44 flex flex-col items-center max-w-container px-4 md:px-0 z-10">
        <div className="flex flex-col md:items-center">
          <h1 className="font-bold text-[1.75em] md:font-extrabold md:text-[42px] max-w-[273px] md:max-w-none">
            Build your crypto portfolio
          </h1>
          <p className="mt-5 md:max-w-[434px] font-light md:font-normal md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="grid md:grid-cols-portfolio grid-cols-1 gap-4 md:gap-7 md:mt-1 mt-4">
          <SmallCard
            svg={crypto4}
            title={"Send & Receive"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            }
          />
          <SmallCard
            svg={crypto2}
            title={"100% Secure Wallet"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            }
          />
          <div className="bg-blue rounded-[40px] pt-11 px-8 row-span-2 flex flex-col items-center justify-between md:col-start-2 md:row-start-1 ">
            <div>
              <h5 className="text-lg font-semibold">iOS & Android App</h5>
              <p className="mt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                amet, morbi non at sed neque.
              </p>
            </div>
            <div>
              <img src={iphone} alt="iphone" className="mt-10 self-end" />
            </div>
          </div>
          <SmallCard
            svg={crypto3}
            title={"Trading Charts"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            }
          />
          <SmallCard
            svg={crypto1}
            title={"Real Time Trading"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            }
          />
        </div>
        <div className="md:mt-12 mt-10">
          <Button>download app</Button>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ svg, title, desc }) {
  return (
    <div className="bg-dark-blue py-12 px-6 flex flex-col rounded-[40px]">
      <div className="w-16 h-16 p-3 bg-blue rounded-3xl">
        <img src={svg} alt="" />
      </div>
      <h4 className="mt-5 font-semibold text-lg uppercase">{title}</h4>
      <p className="mt-3">{desc}</p>
    </div>
  );
}
