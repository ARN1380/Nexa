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
import iphones from "../../../assets/images/iphones.svg";
import earn1 from "../../../assets/images/earndaily/earn1.svg";
import earn2 from "../../../assets/images/earndaily/earn2.svg";
import earn3 from "../../../assets/images/earndaily/earn3.svg";
import earn4 from "../../../assets/images/earndaily/earn4.svg";
import earn5 from "../../../assets/images/earndaily/earn5.svg";
import earn6 from "../../../assets/images/earndaily/earn6.svg";
import exploreIphone from "../../../assets/images/exploreIphone.svg";
import character from "../../../assets/images/character.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Scrollbars from "react-custom-scrollbars-2";

const cardData = [
  {
    id: "1",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "2",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "3",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "4",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "5",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "6",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "7",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
  {
    id: "8",
    img: { character },
    name: "john carter",
    role: "role",
    company: "company",
    desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
  },
];

export default function Landing() {
  return (
    <Scrollbars>
      
    <div className="bg-bg overflow-hidden flex justify-center text-white">
      <div className=" relative max-w-[1920px]">
        <BgCircle />
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
    </Scrollbars>
  );
}

function Content() {
  return (
    <div className="flex flex-col items-center ">
      {/* hero section */}
      <div className="flex relative overflow-x-hiddenn ">
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
      {/* Earn daily iphone */}
      <div className="px-4 mt-20 w-full flex flex-col max-w-container space-y-10 md:flex-row md:space-x-[167px] md:justify-center md:items-center">
        <div className="self-center">
          <img className="" src={iphones} alt="iphones" />
        </div>
        <div className="flex flex-col space-y-4 pr-11 md:max-w-[475px] ">
          <h3 className="capitalize font-bold text-[28px] leading-9 md:text-[42px] md:leading-[55px] ">
            Earn daily rewards on your idle tokens
          </h3>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="flex flex-col space-y-[17px] md:pt-4 ">
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn1} alt="earndaily icon" />
              </div>
              <p>Lowest fees in market</p>
            </div>
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn2} alt="earndaily icon" />
              </div>
              <p>Fast and secure transactions</p>
            </div>
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn3} alt="earndaily icon" />
              </div>
              <p>256-bit secure encryption</p>
            </div>
          </div>
        </div>
      </div>
      {/* Earn daily mac */}
      <div className="flex flex-col space-y-10  md:flex-row mt-20 md:mt-[100px] px-4 md:px-0 justify-start max-w-container w- items-center md:h-[600px]">
        <div className="flex flex-col space-y-4 md:max-w-[475px] md:ml-10 ">
          <h3 className="capitalize font-bold text-[28px] leading-9 md:text-[42px] md:leading-[55px]">
            Earn daily rewards on your idle tokens
          </h3>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="flex flex-col space-y-[17px] md:pt-4">
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn4} alt="earndaily icon" />
              </div>
              <p>Lowest fees in market</p>
            </div>
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn5} alt="earndaily icon" />
              </div>
              <p>Fast and secure transactions</p>
            </div>
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn6} alt="earndaily icon" />
              </div>
              <p>256-bit secure encryption</p>
            </div>
          </div>
        </div>
        <div className=" md:translate-x-[200px]">
          <img className="w-full md:scale-[140%]" src={macSvg} alt="mac book" />
        </div>
      </div>
      {/* explore endless */}
      <div className="w-full mt-24">
        <div className="bg-blue flex justify-center">
          <div className="md:max-h-[513px] max-h-[539px] max-w-container flex flex-col md:flex-row px-4 justify-between overflow-hidden md:overflow-visible md:items-center">
            <div className="mt-10 md:mt-0 flex flex-col space-y-4 items-center md:items-start md:w-1/2">
              <h3 className="font-bold text-[28px] md:text-[42px] max-w-[305px] md:max-w-none md:text-left text-center">
                Explore endless possibilities with FinanceFlow
              </h3>
              <p className="text-center max-w-[330px] md:max-w-none md:text-left md:pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aene.
              </p>
              <Button type="white" width="w-full md:w-auto">
                download app
              </Button>
            </div>
            <div className="flex flex-col items-center md:w-1/2">
              <img
                className="w-[90%] md:w-auto md:h-[150%] -mt-8 md:-mt-20"
                src={exploreIphone}
                alt="two iphone"
              />
            </div>
          </div>
        </div>
      </div>

      {/* comments crousel */}
      <div className="w-full mt-48 flex flex-col items-center">
        <div className="w-full max-w-container flex flex-col md:flex-row justify-between">
          <p className="text-[42px] font-bold">What our users say?</p>
          <Button>download app</Button>
        </div>

        <div className="mt-[33px]">
          {/* carousel items */}
          <MyCarousel cards={cardData} />
        </div>
      </div>

      {/* video section */}
      <div className="mt-40 flex flex-col md:flex-row max-w-container w-full">
        <div>
          <h4 className="text-[28px] font-bold">Get started today</h4>
          <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
          <div className="flex flex-col space-y-[17px] md:pt-10">
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn4} alt="earndaily icon" />
              </div>
              <p>Lowest fees in market</p>
            </div>
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn5} alt="earndaily icon" />
              </div>
              <p>Fast and secure transactions</p>
            </div>
            <div className="flex space-x-[17px] items-center">
              <div className="bg-blue rounded-[13px] w-[46px] h-[46px] flex justify-center items-center">
                <img src={earn6} alt="earndaily icon" />
              </div>
              <p>256-bit secure encryption</p>
            </div>            
          </div>
        </div>
        <div className="max-w-[60%] w-full">
          <div className="bg-dark-blue w-full h-full rounded-[40px] flex justify-center items-center ">
          {/* <video src="" className="w-full "></video> */}
            <Button type='play'></Button>
          </div>
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

function Card({
  id,
  img,
  name,
  role,
  company,
  desc,
  setActiveCard,
  activeCard,
}) {
  const ref = useRef();
  const animationControl = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animationControl.start(
        activeCard === id ? { opacity: 1 } : { opacity: 0.2 }
      );
    }
  }, [isInView, activeCard]);

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={animationControl}
      transition={{ duration: 1 }}
      onClick={() => setActiveCard(id)}
      ref={ref}
    >
      <div
        className={`px-[50px] py-[65px] rounded-[40px] flex flex-col space-y-6 bg-dark-blue cursor-grab w-[370px] md:w-[576px]`}
      >
        <p>{desc}</p>
        <div className="flex space-x-[22px] items-center">
          <img
            className="rounded-full w-[58px] h-[58px]"
            src={img.character}
            alt=""
          />
          <div className="uppercase">
            <h3 className="font-semibold">{name}</h3>
            <p>
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MyCarousel({ cards }) {
  const [activeCard, setActiveCard] = useState(
    Math.ceil(cards.length / 2 - 1).toString()
  );
  const [scrollWidth, setScrollWidth] = useState();

  const ref = useRef();
  useEffect(() => {
    if (ref) {
      setScrollWidth(ref.current.offsetWidth / 2);
    }
  }, [ref]);
  return (
    <div className="w-full h-96 md:h-80 relative">
      <motion.div
        drag="x"
        dragConstraints={{ right: scrollWidth, left: -scrollWidth }}
        className="flex  space-x-[26px]  absolute top-0 -left-[1800px] "
        ref={ref}
      >
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              img={card.img}
              name={card.name}
              role={card.role}
              company={card.company}
              desc={card.desc}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

function BgCircle() {
  return (
    <>
      <div className="md:w-[1145px] md:h-[1145px] w-[800px] h-[800px] absolute md:-top-[420px] md:-left-[30%] top-[200px] -right-[280px] ">
        <img className="md:opacity-40 opacity-60" src={darkCircle} alt="" />
      </div>
      <div className="md:w-[874px] md:h-[874px] w-[1000px] h-[1000px] absolute md:top-[270px] md:left-[52%] top-[1300px] -right-[200px]">
        <img className="opacity-80 md:opacity-100" src={brightCircle} alt="" />
      </div>
    </>
  );
}

// card --> isActive: false
// card --> isActive: false --> isActive: true --> isActive: false
// card --> isActive: false ---------------------> isActive: true
// card --> isActive: false
// card --> isActive: false
