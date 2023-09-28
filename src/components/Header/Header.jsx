import Button from "../elements/Button";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-center z-10 px-6 md:px-0">
      <div className="max-w-container w-full flex items-center justify-between py-9 z-10">
        <div className="flex items-center space-x-16">
          <div className="flex items-center text-white space-x-3">
            <img src={logo} alt="" />
            <h1>FinanceFlow</h1>
          </div>
          <div className="h-[66px] border-l border-l-dark-blue"></div>
          <nav className="text-sm text-white uppercase hidden md:block">
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
        <div className="hidden md:block">
          <Button height="h-14" >Download app</Button>
        </div>
      </div>
    </header>
  );
}
