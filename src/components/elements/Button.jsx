export default function Button(props) {
  const { children, type, height, width, ...other } = props;

  if (type === "play") {
    return (
      <div className="rounded-full w-[100px] h-[100px] bg-white/20 flex justify-center items-center">
        <div className="h-0 w-0  border-t-[16px] border-l-[24px] border-b-[16px] border-transparent border-l-white translate-x-1 "></div>
      </div>
    );
  } else {
    return (
      <div
        className={`uppercase cursor-pointer flex justify-center items-center px-8 text-sm font-bold rounded-full tracking-widest transition duration-150 ease-out 
      ${height ? height : "h-16"}
      ${width ? width : ""}
      ${
        type === "white"
          ? "bg-white text-blue hover:bg-hover-blue hover:text-white"
          : type === "transparent"
          ? "bg-white/10 text-white hover:bg-blue"
          : "bg-blue text-white hover:bg-hover-blue "
      }`}
        {...other}
      >
        {children}
      </div>
    );
  }
}
