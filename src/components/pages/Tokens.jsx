import bitcoin from '../../assets/images/tokens/bitcoin.svg'
import ethereum from '../../assets/images/tokens/ethereum.svg'
import litecoin from '../../assets/images/tokens/litecoin.svg'
import tron from '../../assets/images/tokens/tron.svg'

export default function Tokens() {
  return (
    <div className="flex flex-col items-center bg-bg text-white overflow-hidden">
      <div className="max-w-[568px] w-full text-center mt-[60px]">
        <h1 className="h1">Tokens</h1>
        <p className="paragraph mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque</p>
      </div>
      <div className="mt-[101px] max-w-container w-full grid-cols-tokens grid-rows-tokens m-10 p-10 items-center md:grid hidden">
        
          <p>name</p>
          <p>description</p>
          <p>market cab</p>
          <p>volume</p>
          <p>website</p>
          <div className="flex space-x-4 items-center">
            <div className='w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full'>
              <img className='' src={bitcoin} alt="" />            
            </div>
            <p className="capitalize">bitcoin</p>
            <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">btc</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>$252,844,036,453 USD</p>
          <p>$30,504,879,301 USD</p>
          <p>visit website</p>
          <div className="flex space-x-4 items-center">
            <div className='w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full'>
              <img className='' src={ethereum} alt="" />            
            </div>
            <p className="capitalize">ethereum</p>
            <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">btc</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>$252,844,036,453 USD</p>
          <p>$30,504,879,301 USD</p>
          <p>visit website</p>
          <div className="flex space-x-4 items-center">
            <div className='w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full'>
              <img className='' src={litecoin} alt="" />            
            </div>
            <p className="capitalize">litecoin</p>
            <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">btc</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>$252,844,036,453 USD</p>
          <p>$30,504,879,301 USD</p>
          <p>visit website</p>
          <div className="flex space-x-4 items-center">
            <div className='w-[46px] h-[46px] flex justify-center items-center bg-white rounded-full'>
              <img className='' src={tron} alt="" />            
            </div>
            <p className="capitalize">tron</p>
            <p className="bg-dark-blue px-2 py-[6.5px] uppercase rounded-full">btc</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>$252,844,036,453 USD</p>
          <p>$30,504,879,301 USD</p>
          <p>visit website</p>
      </div>
    </div>
  )
}