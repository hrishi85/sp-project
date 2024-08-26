type args = { color: "blue" | "red" | "yellow" | "green", text:string }

const Alert = ({ color, text }:args) => {
  return <div className="flex w-full items-center"><div className={`w-[15px] h-[15px] rounded-full ${color === "red"? "bg-hlred" : ""} ${color === "yellow" ? "bg-hlyellow" : ""} ${color === "blue"? "bg-hlblue" : ""} ${color === "green" ? "bg-hlgreen" :  ""} mr-3 text-xs lg:text-sm`}></div><p className={`${color === "red"? "text-hlred" : ""} ${color === "yellow" ? "text-hlyellow" : ""} ${color === "blue"? "text-hlblue" : ""} ${color === "green" ? "text-hlgreen" :  ""}`}>{text}</p></div>;
}

export default Alert;