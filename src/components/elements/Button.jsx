export default function Button(props) {
  const { children, type, height, width, ...other } = props;

  return (
    <div
      className={`uppercase cursor-pointer flex justify-center items-center px-8 text-sm font-bold rounded-full tracking-widest transition duration-150 ease-out 
      ${height ? height : "h-16"} 
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
