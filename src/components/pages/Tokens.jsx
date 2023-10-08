import bitcoin from "../../assets/images/tokens/bitcoin.svg";
import ethereum from "../../assets/images/tokens/ethereum.svg";
import litecoin from "../../assets/images/tokens/litecoin.svg";
import tron from "../../assets/images/tokens/tron.svg";

export default function Tokens() {
  return (
    <div className="flex flex-col items-center bg-bg text-white overflow-hidden">
      <div className="max-w-[568px] w-full text-center mt-[60px] px-4 md:px-0">
        <h1 className="h1 md:text-center text-left">Tokens</h1>
        <p className="paragraph md:text-center text-left mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque
        </p>
      </div>
      <div className="mt-[101px] max-w-container w-full grid-cols-tokens grid-rows-tokens m-10 p-10 md:grid hidden [&>*]:h-full [&>*]:border-b [&>*]:border-b-white/10 ">
        <p className="flex items-center">name</p>
        <p className="flex items-center">description</p>
        <p className="flex items-center">market cab</p>
        <p className="flex items-center">volume</p>
        <p className="flex items-center">website</p>
        <div className="flex space-x-4 items-center">
          <div className="w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full">
            <img className="" src={bitcoin} alt="" />
          </div>
          <p className="capitalize">bitcoin</p>
          <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">
            btc
          </p>
        </div>
        <p className="flex items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <p className="flex items-center">$252,844,036,453 USD</p>
        <p className="flex items-center">$30,504,879,301 USD</p>
        <p className="flex items-center">
          <p className="cursor-pointer underline">visit website</p>
        </p>
        <div className="flex space-x-4 items-center">
          <div className="w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full">
            <img className="" src={ethereum} alt="" />
          </div>
          <p className="capitalize">ethereum</p>
          <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">
            btc
          </p>
        </div>
        <p className="flex items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <p className="flex items-center">$252,844,036,453 USD</p>
        <p className="flex items-center">$30,504,879,301 USD</p>
        <p className="flex items-center">
          <p className="cursor-pointer underline">visit website</p>
        </p>
        <div className="flex space-x-4 items-center">
          <div className="w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full">
            <img className="" src={litecoin} alt="" />
          </div>
          <p className="capitalize">litecoin</p>
          <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">
            btc
          </p>
        </div>
        <p className="flex items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <p className="flex items-center">$252,844,036,453 USD</p>
        <p className="flex items-center">$30,504,879,301 USD</p>
        <p className="flex items-center">
          <p className="cursor-pointer underline">visit website</p>
        </p>
        <div className="flex space-x-4 items-center">
          <div className="w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full">
            <img className="" src={tron} alt="" />
          </div>
          <p className="capitalize">tron</p>
          <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">
            btc
          </p>
        </div>
        <p className="flex items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <p className="flex items-center">$252,844,036,453 USD</p>
        <p className="flex items-center">$30,504,879,301 USD</p>
        <p className="flex items-center">
          <p className="cursor-pointer underline">visit website</p>
        </p>
      </div>
      <div className="px-4 md:hidden w-full pt-[48px]">

      <div className=" w-full py-8 border-b border-b-white/10">
        <p className="uppercase">name</p>
        <div className="flex space-x-4 items-center mt-4">
          <div className="w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full">
            <img className="" src={bitcoin} alt="" />
          </div>
          <p className="capitalize">bitcoin</p>
          <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">
            btc
          </p>
        </div>
      </div>      
      <div className=" w-full py-8 border-b border-b-white/10">
        <p className="uppercase">description</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className=" w-full py-8 border-b border-b-white/10">
        <p className="uppercase">market cap</p>
        <p className="mt-4">$252,844,036,453 USD</p>
      </div>
      <div className=" w-full py-8 border-b border-b-white/10">
        <p className="uppercase">volume</p>
        <p className="mt-4">$30,504,879,301 USD</p>
      </div>
      <div className=" w-full py-8 border-b border-b-white/10">
        <p className="uppercase">website</p>
        <p className="mt-4 underline">Visit Website</p>
      </div>
      </div>

    </div>
  );
}
