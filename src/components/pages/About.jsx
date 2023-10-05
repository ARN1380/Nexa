import peopleIcon from "../../assets/images/about/icon1.svg";
import worldwideIcon from "../../assets/images/about/icon2.svg";
import magnifireIcon from "../../assets/images/about/icon3.svg";
import compassIcon from "../../assets/images/about/icon4.svg";
import planet from "../../assets/images/about/planet.svg";
import person1 from "../../assets/images/about/Rectangle2.png";
import person2 from "../../assets/images/about/Rectangle2-1.png";
import person3 from "../../assets/images/about/Rectangle2-2.png";
import comp1 from "../../assets/images/comp1.svg";
import comp2 from "../../assets/images/comp2.svg";
import comp3 from "../../assets/images/comp3.svg";
import comp4 from "../../assets/images/comp4.svg";
import comp5 from "../../assets/images/comp5.svg";
import circle from "../../assets/images/about/circle.svg";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-bg text-white overflow-hidden relative">
      <div className="z-10 absolute -top-10 -left-80">
        <img src={circle} alt="circle" />
      </div>
      {/* hero */}
      <div className="px-4 md:px-0 flex flex-col md:items-center mt-12 md:mt-16 space-y-4 md:space-y-6 z-20">
        <h1 className="h1">About Finance Flow</h1>
        <p className="md:w-[606px] md:text-center md:paragraph mobile-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae
          dolor non aliquam. Malesuada.
        </p>
      </div>
      {/* What drives Finance Flow? */}
      <div className="mt-12 md:mt-28 px-4 md:px-0 grid md:grid-cols-2 grid-cols-1 max-w-container gap-7 w-full z-20">
        <h2 className="h2">What drives Finance Flow?</h2>
        <p className="md:max-w-[496px] w-full justify-self-end self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <div className="bg-dark-blue flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 rounded-[40px] px-8 py-[58px]">
          <div className="rounded-[20px] flex justify-center items-center w-[68px] h-[68px] bg-blue shrink-0 p-2 ">
            <img src={peopleIcon} className="scale-90" alt="" />
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase">Open Source</h4>
            <p className="paragraph mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
              urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </p>
          </div>
        </div>
        <div className="bg-dark-blue flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 rounded-[40px] px-8 py-[58px]">
          <div className="rounded-[20px] flex justify-center items-center w-[68px] h-[68px] bg-blue shrink-0 p-2 ">
            <img src={worldwideIcon} className="scale-90" alt="" />
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase">worldwide</h4>
            <p className="paragraph mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
              urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </p>
          </div>
        </div>
        <div className="bg-dark-blue flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 rounded-[40px] px-8 py-[58px]">
          <div className="rounded-[20px] flex justify-center items-center w-[68px] h-[68px] bg-blue shrink-0 p-2 ">
            <img src={magnifireIcon} className="scale-90" alt="" />
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase">Transparent</h4>
            <p className="paragraph mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
              urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </p>
          </div>
        </div>
        <div className="bg-dark-blue flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 rounded-[40px] px-8 py-[58px]">
          <div className="rounded-[20px] flex justify-center items-center w-[68px] h-[68px] bg-blue shrink-0 p-2 ">
            <img src={compassIcon} className="scale-90" alt="" />
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase">Community Driven</h4>
            <p className="paragraph mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh
              urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </p>
          </div>
        </div>
      </div>
      {/* Our mission */}
      <div className="mt-[14.5rem] px-4 md:px-0 max-w-container w-full flex flex-col md:flex-row relative">
        <div className="max-w-[607px] w-full shrink-0">
          <div className="">
            <h2 className="h2">Our mission</h2>
            <p className="mt-4 paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
              <br /> <br />
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </p>
          </div>
          <div className="mt-[78px]">
            <h2 className="h2">Our mission</h2>
            <p className="mt-4 paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
              <br /> <br />
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </p>
          </div>
        </div>
        <img src={planet} className="md:absolute mt-20 md:mt-0 -right-44 top-0"/>
      </div>
      {/* Timeline */}
      <div className="mt-[179px] flex flex-col md:flex-row md:space-x-[120px] space-y-10 md:space-y-0 max-w-container w-full md:px-0 px-4">
        <div className="w-[382px] shrink-0">
          <h2 className="h2">Timeline</h2>
          <p className="mt-4 paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.{" "}
          </p>
        </div>
        <div className="flex flex-col space-y-20">
          <div className="flex space-x-[54px] border-b border-b-white pb-10">
            <div className="rounded-full bg-white w-6 h-6 shrink-0"></div>
            <div>
              <span className="text-[28px] font-bold">2014</span>
              <p className="mt-6 text-lg font-bold">Announcement</p>
              <p className="mt-3 paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis vivamus at mattis bibendum congue cras id interdum. Risus
                leo et.
              </p>
            </div>
          </div>
          <div className="flex space-x-[54px] border-b border-b-white pb-10">
            <div className="rounded-full bg-white w-6 h-6 shrink-0"></div>
            <div>
              <span className="text-[28px] font-bold">2016</span>
              <p className="mt-6 text-lg font-bold">Announcement</p>
              <p className="mt-3 paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis vivamus at mattis bibendum congue cras id interdum. Risus
                leo et.
              </p>
            </div>
          </div>
          <div className="flex space-x-[54px] border-b border-b-white pb-10">
            <div className="rounded-full bg-white w-6 h-6 shrink-0"></div>
            <div>
              <span className="text-[28px] font-bold">2018</span>
              <p className="mt-6 text-lg font-bold">Announcement</p>
              <p className="mt-3 paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis vivamus at mattis bibendum congue cras id interdum. Risus
                leo et.
              </p>
            </div>
          </div>
          <div className="flex space-x-[54px] border-b border-b-white pb-10">
            <div className="rounded-full bg-white w-6 h-6 shrink-0"></div>
            <div>
              <span className="text-[28px] font-bold">2022</span>
              <p className="mt-6 text-lg font-bold">
                Announcement
              </p>
              
              <p className="mt-3 paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mattis vivamus at mattis bibendum congue cras id interdum. Risus
                leo et.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our team */}
      <div className="mt-20 max-w-container w-full md:px-0 px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:space-y-0 space-y-4">
          <h2 className="h2 self-start">Our Team</h2>
          <p className="paragraph w-full max-w-[496px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>
        <div className="mt-[50px] flex flex-col md:flex-row md:space-x-[38px] space-y-4 md:space-y-0">
          <div className="bg-dark-blue rounded-[40px] p-6 uppercase tracking-[1px]">
            <img src={person1} className="w-full rounded-[40px]" alt="" />
            <p className="mt-8 font-bold">John Carter</p>
            <p className="mt-3 font-light">CEO & CO-Founder</p>
          </div>
          <div className="bg-dark-blue rounded-[40px] p-6 uppercase tracking-[1px]">
            <img src={person2} className="w-full rounded-[40px]" alt="" />
            <p className="mt-8 font-bold">Sophie Moore</p>
            <p className="mt-3 font-light">Community Lead</p>
          </div>
          <div className="bg-dark-blue rounded-[40px] p-6 uppercase tracking-[1px]">
            <img src={person3} className="w-full rounded-[40px]" alt="" />
            <p className="mt-8 font-bold">Alex Turner</p>
            <p className="mt-3 font-light">Operations</p>
          </div>
        </div>
      </div>
      {/* investors */}
      <div className="mt-20 md:mt-[170px] flex flex-col items-center max-w-container w-full z-10 md:mb-[230px] mb-20">
        <div className="text-center w-full max-w-[496px]">
          <h2 className="h2">Investors</h2>
          <p className="paragraph mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-6 md:grid-cols-5 px-10 md:px-0 justify-items-center">
          <div className="flex space-x-[10px] items-center">
            <img src={comp1} alt="company" />
            <h2 className="md:text-2xl text-xl font-bold">company</h2>
          </div>
          <div className="flex space-x-[10px] items-center">
            <img src={comp2} alt="company" />
            <h2 className="md:text-2xl text-xl font-bold">Company</h2>
          </div>
          <div className="flex space-x-[10px] items-center">
            <img src={comp3} alt="company" />
            <h2 className="md:text-2xl text-xl font-bold">company</h2>
          </div>
          <div className="flex space-x-[10px] items-center">
            <img src={comp4} alt="company" />
            <h2 className="md:text-2xl text-xl font-bold">Company</h2>
          </div>
          <div className="flex space-x-[10px] items-center col-span-2 md:col-span-1">
            <img src={comp5} alt="company" />
            <h2 className="md:text-2xl text-xl font-bold">Company</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
